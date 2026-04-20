; ==============================
; SETUP
; ==============================
[Setup]
AppName=ServidorTiendaRopa
AppVersion=3.0.2
DefaultDirName={commonappdata}\ServidorTiendaRopa
DefaultGroupName=ServidorTiendaRopa
OutputDir=output
OutputBaseFilename=Instalador_ServidorTiendaRopa
Compression=lzma
SolidCompression=yes
PrivilegesRequired=admin
ArchitecturesInstallIn64BitMode=x64

; ==============================
; FILES
; ==============================
[Files]
Source: "nssm.exe"; DestDir: "{app}"
Source: "instaladores\node.msi"; DestDir: "{tmp}\instaladores"
Source: "instaladores\postgresSQL.exe"; DestDir: "{tmp}\instaladores"
Source: "backend\package.json"; DestDir: "{app}"
Source: "backend\*"; DestDir: "{app}"; Flags: recursesubdirs; AfterInstall: CrearEnv

; ==============================
; DIRECTORIOS
; ==============================
[Dirs]
Name: "{app}\logs"

; ==============================
; INSTALAR NODE SILENCIOSO
; ==============================
[Run]
Filename: "msiexec.exe"; Parameters: "/i ""{tmp}\instaladores\node.msi"" /qn"; StatusMsg: "Instalando Node.js..."; Flags: waituntilterminated
Filename: "cmd.exe"; Parameters: "/C ""{pf}\nodejs\npm.cmd"" install --omit=dev"; WorkingDir: "{app}"; StatusMsg: "Instalando dependencias..."; Flags: waituntilterminated

Filename: "cmd.exe"; \
Parameters: "/C (set DATABASE_URL=postgresql://{code:GetDBUser}:{code:GetDBPass}@{code:GetDBHost}:5432/{code:GetDBName} && npx prisma generate) > ""{app}\logs\prisma_generate.log"" 2>&1"; \
WorkingDir: "{app}"; \
StatusMsg: "Generando cliente de base de datos..."; \
Flags: waituntilterminated

Filename: "{tmp}\instaladores\postgresSQL.exe"; \
Parameters: "--mode unattended --unattendedmodeui none --superpassword {code:GetDBPass} --servicename postgresql-x64-15 --servicepassword {code:GetDBPass} --serverport 5432"; \
StatusMsg: "Instalando PostgreSQL..."; \
Flags: waituntilterminated; \
Check: PostgreSQLNoInstalado

; Creando base de datos
Filename: "cmd.exe"; \
Parameters: "/C set ""PGPASSWORD={code:GetDBPass}"" && ""C:\Program Files\PostgreSQL\18\bin\createdb.exe"" -U {code:GetDBUser} -h {code:GetDBHost} -p 5432 {code:GetDBName} > ""{app}\logs\db_creation.log"" 2>&1"; \
StatusMsg: "Creando base de datos..."; \
Flags: runhidden waituntilterminated

Filename: "cmd.exe"; \
Parameters: "/C (set DATABASE_URL=postgresql://{code:GetDBUser}:{code:GetDBPass}@{code:GetDBHost}:5432/{code:GetDBName} && npx prisma migrate deploy) > ""{app}\logs\prisma_migrate.log"" 2>&1"; \
WorkingDir: "{app}"; \
StatusMsg: "Configurando base de datos..."; \
Flags: waituntilterminated

; Instalar servicio con NSSM
Filename: "{app}\nssm.exe"; Parameters: "install MiServidorBackup ""C:\Program Files\nodejs\node.exe"" ""{app}\dist\index.js"""; Flags: runhidden waituntilterminated

; Directorio de trabajo
Filename: "{app}\nssm.exe"; Parameters: "set MiServidorBackup AppDirectory ""{app}"""; Flags: runhidden waituntilterminated

; Logs
Filename: "{app}\nssm.exe"; Parameters: "set MiServidorBackup AppStdout ""{app}\logs\output.log"""; Flags: runhidden waituntilterminated
Filename: "{app}\nssm.exe"; Parameters: "set MiServidorBackup AppStderr ""{app}\logs\error.log"""; Flags: runhidden waituntilterminated

; Inicio automatico
Filename: "{app}\nssm.exe"; Parameters: "set MiServidorBackup Start SERVICE_AUTO_START"; Flags: runhidden waituntilterminated

; Iniciar servicio
Filename: "{app}\nssm.exe"; Parameters: "start MiServidorBackup"; Flags: runhidden waituntilterminated

; ==============================
; DESINSTALAR
; ==============================
[UninstallRun]
Filename: "{app}\nssm.exe"; Parameters: "stop MiServidorBackup"; Flags: runhidden waituntilterminated
Filename: "{app}\nssm.exe"; Parameters: "remove MiServidorBackup confirm"; Flags: runhidden waituntilterminated

[Code]
var
  DBPage: TInputQueryWizardPage;
  ConfigPage: TInputQueryWizardPage;

procedure InitializeWizard;
begin
  DBPage := CreateInputQueryPage(wpWelcome, 'Configuración de Base de Datos', 'Ingrese el nombre de la base de datos', 'Este valor se guardará en el archivo .env del sistema.');
  DBPage.Add('DB_NAME:', False);

  ConfigPage := CreateInputQueryPage(wpWelcome, 'Configuración de Base de Datos', 'Ingrese los datos de conexion', 'Estos valor se guardará en el archivo .env del sistema.');
  ConfigPage.Add('DB_USER:', False);
  ConfigPage.Add('DB_PASSWORD:', False);
  ConfigPage.Add('DB_HOST:', False);
  ConfigPage.Add('PORT:', False);

  // Valor Por defecto
  ConfigPage.Values[0] := 'postgres';
  ConfigPage.Values[1] := '1234';
  ConfigPage.Values[2] := 'localhost';
  ConfigPage.Values[3] := '3000';
end;

procedure CrearEnv;
var
  EnvFile: string;
  EnvContent: string;
begin
  EnvFile := ExpandConstant('{app}\.env');
  EnvContent := 'DATABASE_URL=postgresql://' + ConfigPage.Values[0] + ':' + ConfigPage.Values[1] + '@' + ConfigPage.Values[2] + ':' + '5432' + '/' + DBPage.Values[0] + #13#10 +
                'PORT=' + ConfigPage.Values[3] + #13#10;
  SaveStringToFile(EnvFile, EnvContent, False);
end;

function GetDBUser(Param: String): String;
begin
  Result := ConfigPage.Values[0];
end;

function GetDBPass(Param: String): String;
begin
  Result := ConfigPage.Values[1];
end;

function GetDBHost(Param: String): String;
begin
  Result := ConfigPage.Values[2];
end;

function GetDBName(Param: String): String;
begin
  Result := DBPage.Values[0];
end;

function PostgreSQLNoInstalado: Boolean;
var
  instalado: Boolean;
  CarpetaExiste: Boolean;
begin
  instalado := RegKeyExists(HKEY_LOCAL_MACHINE, 'SOFTWARE\PostgreSQL\Installations\postgresql-x64-18');
  CarpetaExiste := DirExists('C:\Program Files\PostgreSQL\18');
  if Instalado or CarpetaExiste then
    Log('PostgreSQL ya está instalado, omitiendo instalación.')
  else
    Log('PostgreSQL no encontrado, procediendo con la instalación.');

  Result := not Instalado;
end;