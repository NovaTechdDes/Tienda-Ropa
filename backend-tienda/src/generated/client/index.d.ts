
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Marca
 * 
 */
export type Marca = $Result.DefaultSelection<Prisma.$MarcaPayload>
/**
 * Model Provedor
 * 
 */
export type Provedor = $Result.DefaultSelection<Prisma.$ProvedorPayload>
/**
 * Model Talle
 * 
 */
export type Talle = $Result.DefaultSelection<Prisma.$TallePayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Color
 * 
 */
export type Color = $Result.DefaultSelection<Prisma.$ColorPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model variante_producto
 * 
 */
export type variante_producto = $Result.DefaultSelection<Prisma.$variante_productoPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model detalle_venta
 * 
 */
export type detalle_venta = $Result.DefaultSelection<Prisma.$detalle_ventaPayload>
/**
 * Model stock_movimiento
 * 
 */
export type stock_movimiento = $Result.DefaultSelection<Prisma.$stock_movimientoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marca`: Exposes CRUD operations for the **Marca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcas
    * const marcas = await prisma.marca.findMany()
    * ```
    */
  get marca(): Prisma.MarcaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provedor`: Exposes CRUD operations for the **Provedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provedors
    * const provedors = await prisma.provedor.findMany()
    * ```
    */
  get provedor(): Prisma.ProvedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.talle`: Exposes CRUD operations for the **Talle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Talles
    * const talles = await prisma.talle.findMany()
    * ```
    */
  get talle(): Prisma.TalleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.color`: Exposes CRUD operations for the **Color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.ColorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variante_producto`: Exposes CRUD operations for the **variante_producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variante_productos
    * const variante_productos = await prisma.variante_producto.findMany()
    * ```
    */
  get variante_producto(): Prisma.variante_productoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_venta`: Exposes CRUD operations for the **detalle_venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_ventas
    * const detalle_ventas = await prisma.detalle_venta.findMany()
    * ```
    */
  get detalle_venta(): Prisma.detalle_ventaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_movimiento`: Exposes CRUD operations for the **stock_movimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_movimientos
    * const stock_movimientos = await prisma.stock_movimiento.findMany()
    * ```
    */
  get stock_movimiento(): Prisma.stock_movimientoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Marca: 'Marca',
    Provedor: 'Provedor',
    Talle: 'Talle',
    Categoria: 'Categoria',
    Color: 'Color',
    Producto: 'Producto',
    variante_producto: 'variante_producto',
    Venta: 'Venta',
    detalle_venta: 'detalle_venta',
    stock_movimiento: 'stock_movimiento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "marca" | "provedor" | "talle" | "categoria" | "color" | "producto" | "variante_producto" | "venta" | "detalle_venta" | "stock_movimiento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Marca: {
        payload: Prisma.$MarcaPayload<ExtArgs>
        fields: Prisma.MarcaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findFirst: {
            args: Prisma.MarcaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findMany: {
            args: Prisma.MarcaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          create: {
            args: Prisma.MarcaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          createMany: {
            args: Prisma.MarcaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          delete: {
            args: Prisma.MarcaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          update: {
            args: Prisma.MarcaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          deleteMany: {
            args: Prisma.MarcaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          upsert: {
            args: Prisma.MarcaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          aggregate: {
            args: Prisma.MarcaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarca>
          }
          groupBy: {
            args: Prisma.MarcaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcaCountArgs<ExtArgs>
            result: $Utils.Optional<MarcaCountAggregateOutputType> | number
          }
        }
      }
      Provedor: {
        payload: Prisma.$ProvedorPayload<ExtArgs>
        fields: Prisma.ProvedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>
          }
          findFirst: {
            args: Prisma.ProvedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>
          }
          findMany: {
            args: Prisma.ProvedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>[]
          }
          create: {
            args: Prisma.ProvedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>
          }
          createMany: {
            args: Prisma.ProvedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>[]
          }
          delete: {
            args: Prisma.ProvedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>
          }
          update: {
            args: Prisma.ProvedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>
          }
          deleteMany: {
            args: Prisma.ProvedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>[]
          }
          upsert: {
            args: Prisma.ProvedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvedorPayload>
          }
          aggregate: {
            args: Prisma.ProvedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvedor>
          }
          groupBy: {
            args: Prisma.ProvedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProvedorCountAggregateOutputType> | number
          }
        }
      }
      Talle: {
        payload: Prisma.$TallePayload<ExtArgs>
        fields: Prisma.TalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          findFirst: {
            args: Prisma.TalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          findMany: {
            args: Prisma.TalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>[]
          }
          create: {
            args: Prisma.TalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          createMany: {
            args: Prisma.TalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>[]
          }
          delete: {
            args: Prisma.TalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          update: {
            args: Prisma.TalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          deleteMany: {
            args: Prisma.TalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>[]
          }
          upsert: {
            args: Prisma.TalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          aggregate: {
            args: Prisma.TalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTalle>
          }
          groupBy: {
            args: Prisma.TalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TalleCountArgs<ExtArgs>
            result: $Utils.Optional<TalleCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Color: {
        payload: Prisma.$ColorPayload<ExtArgs>
        fields: Prisma.ColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findFirst: {
            args: Prisma.ColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findMany: {
            args: Prisma.ColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          create: {
            args: Prisma.ColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          createMany: {
            args: Prisma.ColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          delete: {
            args: Prisma.ColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          update: {
            args: Prisma.ColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          deleteMany: {
            args: Prisma.ColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          upsert: {
            args: Prisma.ColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColor>
          }
          groupBy: {
            args: Prisma.ColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorCountArgs<ExtArgs>
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      variante_producto: {
        payload: Prisma.$variante_productoPayload<ExtArgs>
        fields: Prisma.variante_productoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variante_productoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variante_productoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>
          }
          findFirst: {
            args: Prisma.variante_productoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variante_productoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>
          }
          findMany: {
            args: Prisma.variante_productoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>[]
          }
          create: {
            args: Prisma.variante_productoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>
          }
          createMany: {
            args: Prisma.variante_productoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.variante_productoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>[]
          }
          delete: {
            args: Prisma.variante_productoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>
          }
          update: {
            args: Prisma.variante_productoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>
          }
          deleteMany: {
            args: Prisma.variante_productoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variante_productoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.variante_productoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>[]
          }
          upsert: {
            args: Prisma.variante_productoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variante_productoPayload>
          }
          aggregate: {
            args: Prisma.Variante_productoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariante_producto>
          }
          groupBy: {
            args: Prisma.variante_productoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Variante_productoGroupByOutputType>[]
          }
          count: {
            args: Prisma.variante_productoCountArgs<ExtArgs>
            result: $Utils.Optional<Variante_productoCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      detalle_venta: {
        payload: Prisma.$detalle_ventaPayload<ExtArgs>
        fields: Prisma.detalle_ventaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_ventaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_ventaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>
          }
          findFirst: {
            args: Prisma.detalle_ventaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_ventaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>
          }
          findMany: {
            args: Prisma.detalle_ventaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>[]
          }
          create: {
            args: Prisma.detalle_ventaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>
          }
          createMany: {
            args: Prisma.detalle_ventaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalle_ventaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>[]
          }
          delete: {
            args: Prisma.detalle_ventaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>
          }
          update: {
            args: Prisma.detalle_ventaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>
          }
          deleteMany: {
            args: Prisma.detalle_ventaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_ventaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detalle_ventaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>[]
          }
          upsert: {
            args: Prisma.detalle_ventaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventaPayload>
          }
          aggregate: {
            args: Prisma.Detalle_ventaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_venta>
          }
          groupBy: {
            args: Prisma.detalle_ventaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_ventaGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_ventaCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_ventaCountAggregateOutputType> | number
          }
        }
      }
      stock_movimiento: {
        payload: Prisma.$stock_movimientoPayload<ExtArgs>
        fields: Prisma.stock_movimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_movimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_movimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>
          }
          findFirst: {
            args: Prisma.stock_movimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_movimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>
          }
          findMany: {
            args: Prisma.stock_movimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>[]
          }
          create: {
            args: Prisma.stock_movimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>
          }
          createMany: {
            args: Prisma.stock_movimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_movimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>[]
          }
          delete: {
            args: Prisma.stock_movimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>
          }
          update: {
            args: Prisma.stock_movimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>
          }
          deleteMany: {
            args: Prisma.stock_movimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_movimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_movimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>[]
          }
          upsert: {
            args: Prisma.stock_movimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_movimientoPayload>
          }
          aggregate: {
            args: Prisma.Stock_movimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_movimiento>
          }
          groupBy: {
            args: Prisma.stock_movimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_movimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_movimientoCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_movimientoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    marca?: MarcaOmit
    provedor?: ProvedorOmit
    talle?: TalleOmit
    categoria?: CategoriaOmit
    color?: ColorOmit
    producto?: ProductoOmit
    variante_producto?: variante_productoOmit
    venta?: VentaOmit
    detalle_venta?: detalle_ventaOmit
    stock_movimiento?: stock_movimientoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    variantes: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantes?: boolean | ProductoCountOutputTypeCountVariantesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountVariantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variante_productoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
    dni: string | null
    direccion: string | null
    localidad: string | null
    observacion: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
    dni: string | null
    direccion: string | null
    localidad: string | null
    observacion: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    telefono: number
    dni: number
    direccion: number
    localidad: number
    observacion: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    dni?: true
    direccion?: true
    localidad?: true
    observacion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    dni?: true
    direccion?: true
    localidad?: true
    observacion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    dni?: true
    direccion?: true
    localidad?: true
    observacion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    telefono: string | null
    dni: string | null
    direccion: string | null
    localidad: string | null
    observacion: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    dni?: boolean
    direccion?: boolean
    localidad?: boolean
    observacion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    dni?: boolean
    direccion?: boolean
    localidad?: boolean
    observacion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    dni?: boolean
    direccion?: boolean
    localidad?: boolean
    observacion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    dni?: boolean
    direccion?: boolean
    localidad?: boolean
    observacion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "telefono" | "dni" | "direccion" | "localidad" | "observacion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      telefono: string | null
      dni: string | null
      direccion: string | null
      localidad: string | null
      observacion: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly dni: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly localidad: FieldRef<"Cliente", 'String'>
    readonly observacion: FieldRef<"Cliente", 'String'>
    readonly activo: FieldRef<"Cliente", 'Boolean'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
  }


  /**
   * Model Marca
   */

  export type AggregateMarca = {
    _count: MarcaCountAggregateOutputType | null
    _avg: MarcaAvgAggregateOutputType | null
    _sum: MarcaSumAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  export type MarcaAvgAggregateOutputType = {
    id: number | null
  }

  export type MarcaSumAggregateOutputType = {
    id: number | null
  }

  export type MarcaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MarcaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MarcaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type MarcaAvgAggregateInputType = {
    id?: true
  }

  export type MarcaSumAggregateInputType = {
    id?: true
  }

  export type MarcaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MarcaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MarcaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type MarcaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marca to aggregate.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marcas
    **/
    _count?: true | MarcaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcaMaxAggregateInputType
  }

  export type GetMarcaAggregateType<T extends MarcaAggregateArgs> = {
        [P in keyof T & keyof AggregateMarca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarca[P]>
      : GetScalarType<T[P], AggregateMarca[P]>
  }




  export type MarcaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcaWhereInput
    orderBy?: MarcaOrderByWithAggregationInput | MarcaOrderByWithAggregationInput[]
    by: MarcaScalarFieldEnum[] | MarcaScalarFieldEnum
    having?: MarcaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcaCountAggregateInputType | true
    _avg?: MarcaAvgAggregateInputType
    _sum?: MarcaSumAggregateInputType
    _min?: MarcaMinAggregateInputType
    _max?: MarcaMaxAggregateInputType
  }

  export type MarcaGroupByOutputType = {
    id: number
    nombre: string
    _count: MarcaCountAggregateOutputType | null
    _avg: MarcaAvgAggregateOutputType | null
    _sum: MarcaSumAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  type GetMarcaGroupByPayload<T extends MarcaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcaGroupByOutputType[P]>
            : GetScalarType<T[P], MarcaGroupByOutputType[P]>
        }
      >
    >


  export type MarcaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type MarcaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["marca"]>

  export type $MarcaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marca"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["marca"]>
    composites: {}
  }

  type MarcaGetPayload<S extends boolean | null | undefined | MarcaDefaultArgs> = $Result.GetResult<Prisma.$MarcaPayload, S>

  type MarcaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcaCountAggregateInputType | true
    }

  export interface MarcaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marca'], meta: { name: 'Marca' } }
    /**
     * Find zero or one Marca that matches the filter.
     * @param {MarcaFindUniqueArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcaFindUniqueArgs>(args: SelectSubset<T, MarcaFindUniqueArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcaFindUniqueOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcaFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcaFindFirstArgs>(args?: SelectSubset<T, MarcaFindFirstArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcaFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcas
     * const marcas = await prisma.marca.findMany()
     * 
     * // Get first 10 Marcas
     * const marcas = await prisma.marca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcaWithIdOnly = await prisma.marca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcaFindManyArgs>(args?: SelectSubset<T, MarcaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marca.
     * @param {MarcaCreateArgs} args - Arguments to create a Marca.
     * @example
     * // Create one Marca
     * const Marca = await prisma.marca.create({
     *   data: {
     *     // ... data to create a Marca
     *   }
     * })
     * 
     */
    create<T extends MarcaCreateArgs>(args: SelectSubset<T, MarcaCreateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcas.
     * @param {MarcaCreateManyArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcaCreateManyArgs>(args?: SelectSubset<T, MarcaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcas and returns the data saved in the database.
     * @param {MarcaCreateManyAndReturnArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcas and only return the `id`
     * const marcaWithIdOnly = await prisma.marca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcaCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marca.
     * @param {MarcaDeleteArgs} args - Arguments to delete one Marca.
     * @example
     * // Delete one Marca
     * const Marca = await prisma.marca.delete({
     *   where: {
     *     // ... filter to delete one Marca
     *   }
     * })
     * 
     */
    delete<T extends MarcaDeleteArgs>(args: SelectSubset<T, MarcaDeleteArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marca.
     * @param {MarcaUpdateArgs} args - Arguments to update one Marca.
     * @example
     * // Update one Marca
     * const marca = await prisma.marca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcaUpdateArgs>(args: SelectSubset<T, MarcaUpdateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcas.
     * @param {MarcaDeleteManyArgs} args - Arguments to filter Marcas to delete.
     * @example
     * // Delete a few Marcas
     * const { count } = await prisma.marca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcaDeleteManyArgs>(args?: SelectSubset<T, MarcaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcaUpdateManyArgs>(args: SelectSubset<T, MarcaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas and returns the data updated in the database.
     * @param {MarcaUpdateManyAndReturnArgs} args - Arguments to update many Marcas.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcas and only return the `id`
     * const marcaWithIdOnly = await prisma.marca.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarcaUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marca.
     * @param {MarcaUpsertArgs} args - Arguments to update or create a Marca.
     * @example
     * // Update or create a Marca
     * const marca = await prisma.marca.upsert({
     *   create: {
     *     // ... data to create a Marca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marca we want to update
     *   }
     * })
     */
    upsert<T extends MarcaUpsertArgs>(args: SelectSubset<T, MarcaUpsertArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaCountArgs} args - Arguments to filter Marcas to count.
     * @example
     * // Count the number of Marcas
     * const count = await prisma.marca.count({
     *   where: {
     *     // ... the filter for the Marcas we want to count
     *   }
     * })
    **/
    count<T extends MarcaCountArgs>(
      args?: Subset<T, MarcaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarcaAggregateArgs>(args: Subset<T, MarcaAggregateArgs>): Prisma.PrismaPromise<GetMarcaAggregateType<T>>

    /**
     * Group by Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarcaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcaGroupByArgs['orderBy'] }
        : { orderBy?: MarcaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarcaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marca model
   */
  readonly fields: MarcaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Marca model
   */
  interface MarcaFieldRefs {
    readonly id: FieldRef<"Marca", 'Int'>
    readonly nombre: FieldRef<"Marca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Marca findUnique
   */
  export type MarcaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findUniqueOrThrow
   */
  export type MarcaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findFirst
   */
  export type MarcaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findFirstOrThrow
   */
  export type MarcaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findMany
   */
  export type MarcaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Filter, which Marcas to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca create
   */
  export type MarcaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data needed to create a Marca.
     */
    data: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
  }

  /**
   * Marca createMany
   */
  export type MarcaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca createManyAndReturn
   */
  export type MarcaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca update
   */
  export type MarcaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data needed to update a Marca.
     */
    data: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
    /**
     * Choose, which Marca to update.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca updateMany
   */
  export type MarcaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca updateManyAndReturn
   */
  export type MarcaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca upsert
   */
  export type MarcaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The filter to search for the Marca to update in case it exists.
     */
    where: MarcaWhereUniqueInput
    /**
     * In case the Marca found by the `where` argument doesn't exist, create a new Marca with this data.
     */
    create: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
    /**
     * In case the Marca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
  }

  /**
   * Marca delete
   */
  export type MarcaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Filter which Marca to delete.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca deleteMany
   */
  export type MarcaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marcas to delete
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to delete.
     */
    limit?: number
  }

  /**
   * Marca without action
   */
  export type MarcaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
  }


  /**
   * Model Provedor
   */

  export type AggregateProvedor = {
    _count: ProvedorCountAggregateOutputType | null
    _avg: ProvedorAvgAggregateOutputType | null
    _sum: ProvedorSumAggregateOutputType | null
    _min: ProvedorMinAggregateOutputType | null
    _max: ProvedorMaxAggregateOutputType | null
  }

  export type ProvedorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvedorSumAggregateOutputType = {
    id: number | null
  }

  export type ProvedorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ProvedorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ProvedorCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ProvedorAvgAggregateInputType = {
    id?: true
  }

  export type ProvedorSumAggregateInputType = {
    id?: true
  }

  export type ProvedorMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ProvedorMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ProvedorCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ProvedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provedor to aggregate.
     */
    where?: ProvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provedors to fetch.
     */
    orderBy?: ProvedorOrderByWithRelationInput | ProvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provedors
    **/
    _count?: true | ProvedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvedorMaxAggregateInputType
  }

  export type GetProvedorAggregateType<T extends ProvedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProvedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvedor[P]>
      : GetScalarType<T[P], AggregateProvedor[P]>
  }




  export type ProvedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvedorWhereInput
    orderBy?: ProvedorOrderByWithAggregationInput | ProvedorOrderByWithAggregationInput[]
    by: ProvedorScalarFieldEnum[] | ProvedorScalarFieldEnum
    having?: ProvedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvedorCountAggregateInputType | true
    _avg?: ProvedorAvgAggregateInputType
    _sum?: ProvedorSumAggregateInputType
    _min?: ProvedorMinAggregateInputType
    _max?: ProvedorMaxAggregateInputType
  }

  export type ProvedorGroupByOutputType = {
    id: number
    nombre: string
    _count: ProvedorCountAggregateOutputType | null
    _avg: ProvedorAvgAggregateOutputType | null
    _sum: ProvedorSumAggregateOutputType | null
    _min: ProvedorMinAggregateOutputType | null
    _max: ProvedorMaxAggregateOutputType | null
  }

  type GetProvedorGroupByPayload<T extends ProvedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProvedorGroupByOutputType[P]>
        }
      >
    >


  export type ProvedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["provedor"]>

  export type ProvedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["provedor"]>

  export type ProvedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["provedor"]>

  export type ProvedorSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ProvedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["provedor"]>

  export type $ProvedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provedor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["provedor"]>
    composites: {}
  }

  type ProvedorGetPayload<S extends boolean | null | undefined | ProvedorDefaultArgs> = $Result.GetResult<Prisma.$ProvedorPayload, S>

  type ProvedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvedorCountAggregateInputType | true
    }

  export interface ProvedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provedor'], meta: { name: 'Provedor' } }
    /**
     * Find zero or one Provedor that matches the filter.
     * @param {ProvedorFindUniqueArgs} args - Arguments to find a Provedor
     * @example
     * // Get one Provedor
     * const provedor = await prisma.provedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvedorFindUniqueArgs>(args: SelectSubset<T, ProvedorFindUniqueArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvedorFindUniqueOrThrowArgs} args - Arguments to find a Provedor
     * @example
     * // Get one Provedor
     * const provedor = await prisma.provedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorFindFirstArgs} args - Arguments to find a Provedor
     * @example
     * // Get one Provedor
     * const provedor = await prisma.provedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvedorFindFirstArgs>(args?: SelectSubset<T, ProvedorFindFirstArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorFindFirstOrThrowArgs} args - Arguments to find a Provedor
     * @example
     * // Get one Provedor
     * const provedor = await prisma.provedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provedors
     * const provedors = await prisma.provedor.findMany()
     * 
     * // Get first 10 Provedors
     * const provedors = await prisma.provedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provedorWithIdOnly = await prisma.provedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvedorFindManyArgs>(args?: SelectSubset<T, ProvedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provedor.
     * @param {ProvedorCreateArgs} args - Arguments to create a Provedor.
     * @example
     * // Create one Provedor
     * const Provedor = await prisma.provedor.create({
     *   data: {
     *     // ... data to create a Provedor
     *   }
     * })
     * 
     */
    create<T extends ProvedorCreateArgs>(args: SelectSubset<T, ProvedorCreateArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provedors.
     * @param {ProvedorCreateManyArgs} args - Arguments to create many Provedors.
     * @example
     * // Create many Provedors
     * const provedor = await prisma.provedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvedorCreateManyArgs>(args?: SelectSubset<T, ProvedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provedors and returns the data saved in the database.
     * @param {ProvedorCreateManyAndReturnArgs} args - Arguments to create many Provedors.
     * @example
     * // Create many Provedors
     * const provedor = await prisma.provedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provedors and only return the `id`
     * const provedorWithIdOnly = await prisma.provedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvedorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provedor.
     * @param {ProvedorDeleteArgs} args - Arguments to delete one Provedor.
     * @example
     * // Delete one Provedor
     * const Provedor = await prisma.provedor.delete({
     *   where: {
     *     // ... filter to delete one Provedor
     *   }
     * })
     * 
     */
    delete<T extends ProvedorDeleteArgs>(args: SelectSubset<T, ProvedorDeleteArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provedor.
     * @param {ProvedorUpdateArgs} args - Arguments to update one Provedor.
     * @example
     * // Update one Provedor
     * const provedor = await prisma.provedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvedorUpdateArgs>(args: SelectSubset<T, ProvedorUpdateArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provedors.
     * @param {ProvedorDeleteManyArgs} args - Arguments to filter Provedors to delete.
     * @example
     * // Delete a few Provedors
     * const { count } = await prisma.provedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvedorDeleteManyArgs>(args?: SelectSubset<T, ProvedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provedors
     * const provedor = await prisma.provedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvedorUpdateManyArgs>(args: SelectSubset<T, ProvedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provedors and returns the data updated in the database.
     * @param {ProvedorUpdateManyAndReturnArgs} args - Arguments to update many Provedors.
     * @example
     * // Update many Provedors
     * const provedor = await prisma.provedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provedors and only return the `id`
     * const provedorWithIdOnly = await prisma.provedor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvedorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provedor.
     * @param {ProvedorUpsertArgs} args - Arguments to update or create a Provedor.
     * @example
     * // Update or create a Provedor
     * const provedor = await prisma.provedor.upsert({
     *   create: {
     *     // ... data to create a Provedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provedor we want to update
     *   }
     * })
     */
    upsert<T extends ProvedorUpsertArgs>(args: SelectSubset<T, ProvedorUpsertArgs<ExtArgs>>): Prisma__ProvedorClient<$Result.GetResult<Prisma.$ProvedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorCountArgs} args - Arguments to filter Provedors to count.
     * @example
     * // Count the number of Provedors
     * const count = await prisma.provedor.count({
     *   where: {
     *     // ... the filter for the Provedors we want to count
     *   }
     * })
    **/
    count<T extends ProvedorCountArgs>(
      args?: Subset<T, ProvedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvedorAggregateArgs>(args: Subset<T, ProvedorAggregateArgs>): Prisma.PrismaPromise<GetProvedorAggregateType<T>>

    /**
     * Group by Provedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvedorGroupByArgs['orderBy'] }
        : { orderBy?: ProvedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provedor model
   */
  readonly fields: ProvedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provedor model
   */
  interface ProvedorFieldRefs {
    readonly id: FieldRef<"Provedor", 'Int'>
    readonly nombre: FieldRef<"Provedor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Provedor findUnique
   */
  export type ProvedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * Filter, which Provedor to fetch.
     */
    where: ProvedorWhereUniqueInput
  }

  /**
   * Provedor findUniqueOrThrow
   */
  export type ProvedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * Filter, which Provedor to fetch.
     */
    where: ProvedorWhereUniqueInput
  }

  /**
   * Provedor findFirst
   */
  export type ProvedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * Filter, which Provedor to fetch.
     */
    where?: ProvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provedors to fetch.
     */
    orderBy?: ProvedorOrderByWithRelationInput | ProvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provedors.
     */
    cursor?: ProvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provedors.
     */
    distinct?: ProvedorScalarFieldEnum | ProvedorScalarFieldEnum[]
  }

  /**
   * Provedor findFirstOrThrow
   */
  export type ProvedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * Filter, which Provedor to fetch.
     */
    where?: ProvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provedors to fetch.
     */
    orderBy?: ProvedorOrderByWithRelationInput | ProvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provedors.
     */
    cursor?: ProvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provedors.
     */
    distinct?: ProvedorScalarFieldEnum | ProvedorScalarFieldEnum[]
  }

  /**
   * Provedor findMany
   */
  export type ProvedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * Filter, which Provedors to fetch.
     */
    where?: ProvedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provedors to fetch.
     */
    orderBy?: ProvedorOrderByWithRelationInput | ProvedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provedors.
     */
    cursor?: ProvedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provedors.
     */
    distinct?: ProvedorScalarFieldEnum | ProvedorScalarFieldEnum[]
  }

  /**
   * Provedor create
   */
  export type ProvedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * The data needed to create a Provedor.
     */
    data: XOR<ProvedorCreateInput, ProvedorUncheckedCreateInput>
  }

  /**
   * Provedor createMany
   */
  export type ProvedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provedors.
     */
    data: ProvedorCreateManyInput | ProvedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provedor createManyAndReturn
   */
  export type ProvedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * The data used to create many Provedors.
     */
    data: ProvedorCreateManyInput | ProvedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provedor update
   */
  export type ProvedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * The data needed to update a Provedor.
     */
    data: XOR<ProvedorUpdateInput, ProvedorUncheckedUpdateInput>
    /**
     * Choose, which Provedor to update.
     */
    where: ProvedorWhereUniqueInput
  }

  /**
   * Provedor updateMany
   */
  export type ProvedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provedors.
     */
    data: XOR<ProvedorUpdateManyMutationInput, ProvedorUncheckedUpdateManyInput>
    /**
     * Filter which Provedors to update
     */
    where?: ProvedorWhereInput
    /**
     * Limit how many Provedors to update.
     */
    limit?: number
  }

  /**
   * Provedor updateManyAndReturn
   */
  export type ProvedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * The data used to update Provedors.
     */
    data: XOR<ProvedorUpdateManyMutationInput, ProvedorUncheckedUpdateManyInput>
    /**
     * Filter which Provedors to update
     */
    where?: ProvedorWhereInput
    /**
     * Limit how many Provedors to update.
     */
    limit?: number
  }

  /**
   * Provedor upsert
   */
  export type ProvedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * The filter to search for the Provedor to update in case it exists.
     */
    where: ProvedorWhereUniqueInput
    /**
     * In case the Provedor found by the `where` argument doesn't exist, create a new Provedor with this data.
     */
    create: XOR<ProvedorCreateInput, ProvedorUncheckedCreateInput>
    /**
     * In case the Provedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvedorUpdateInput, ProvedorUncheckedUpdateInput>
  }

  /**
   * Provedor delete
   */
  export type ProvedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
    /**
     * Filter which Provedor to delete.
     */
    where: ProvedorWhereUniqueInput
  }

  /**
   * Provedor deleteMany
   */
  export type ProvedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provedors to delete
     */
    where?: ProvedorWhereInput
    /**
     * Limit how many Provedors to delete.
     */
    limit?: number
  }

  /**
   * Provedor without action
   */
  export type ProvedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provedor
     */
    select?: ProvedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provedor
     */
    omit?: ProvedorOmit<ExtArgs> | null
  }


  /**
   * Model Talle
   */

  export type AggregateTalle = {
    _count: TalleCountAggregateOutputType | null
    _avg: TalleAvgAggregateOutputType | null
    _sum: TalleSumAggregateOutputType | null
    _min: TalleMinAggregateOutputType | null
    _max: TalleMaxAggregateOutputType | null
  }

  export type TalleAvgAggregateOutputType = {
    id: number | null
  }

  export type TalleSumAggregateOutputType = {
    id: number | null
  }

  export type TalleMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type TalleMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type TalleCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type TalleAvgAggregateInputType = {
    id?: true
  }

  export type TalleSumAggregateInputType = {
    id?: true
  }

  export type TalleMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TalleMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TalleCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type TalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talle to aggregate.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Talles
    **/
    _count?: true | TalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TalleMaxAggregateInputType
  }

  export type GetTalleAggregateType<T extends TalleAggregateArgs> = {
        [P in keyof T & keyof AggregateTalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTalle[P]>
      : GetScalarType<T[P], AggregateTalle[P]>
  }




  export type TalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalleWhereInput
    orderBy?: TalleOrderByWithAggregationInput | TalleOrderByWithAggregationInput[]
    by: TalleScalarFieldEnum[] | TalleScalarFieldEnum
    having?: TalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TalleCountAggregateInputType | true
    _avg?: TalleAvgAggregateInputType
    _sum?: TalleSumAggregateInputType
    _min?: TalleMinAggregateInputType
    _max?: TalleMaxAggregateInputType
  }

  export type TalleGroupByOutputType = {
    id: number
    nombre: string
    _count: TalleCountAggregateOutputType | null
    _avg: TalleAvgAggregateOutputType | null
    _sum: TalleSumAggregateOutputType | null
    _min: TalleMinAggregateOutputType | null
    _max: TalleMaxAggregateOutputType | null
  }

  type GetTalleGroupByPayload<T extends TalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalleGroupByOutputType[P]>
            : GetScalarType<T[P], TalleGroupByOutputType[P]>
        }
      >
    >


  export type TalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["talle"]>

  export type TalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["talle"]>

  export type TalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["talle"]>

  export type TalleSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type TalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["talle"]>

  export type $TallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Talle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["talle"]>
    composites: {}
  }

  type TalleGetPayload<S extends boolean | null | undefined | TalleDefaultArgs> = $Result.GetResult<Prisma.$TallePayload, S>

  type TalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TalleCountAggregateInputType | true
    }

  export interface TalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Talle'], meta: { name: 'Talle' } }
    /**
     * Find zero or one Talle that matches the filter.
     * @param {TalleFindUniqueArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalleFindUniqueArgs>(args: SelectSubset<T, TalleFindUniqueArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Talle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalleFindUniqueOrThrowArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalleFindUniqueOrThrowArgs>(args: SelectSubset<T, TalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleFindFirstArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalleFindFirstArgs>(args?: SelectSubset<T, TalleFindFirstArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleFindFirstOrThrowArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalleFindFirstOrThrowArgs>(args?: SelectSubset<T, TalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Talles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Talles
     * const talles = await prisma.talle.findMany()
     * 
     * // Get first 10 Talles
     * const talles = await prisma.talle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const talleWithIdOnly = await prisma.talle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TalleFindManyArgs>(args?: SelectSubset<T, TalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Talle.
     * @param {TalleCreateArgs} args - Arguments to create a Talle.
     * @example
     * // Create one Talle
     * const Talle = await prisma.talle.create({
     *   data: {
     *     // ... data to create a Talle
     *   }
     * })
     * 
     */
    create<T extends TalleCreateArgs>(args: SelectSubset<T, TalleCreateArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Talles.
     * @param {TalleCreateManyArgs} args - Arguments to create many Talles.
     * @example
     * // Create many Talles
     * const talle = await prisma.talle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TalleCreateManyArgs>(args?: SelectSubset<T, TalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Talles and returns the data saved in the database.
     * @param {TalleCreateManyAndReturnArgs} args - Arguments to create many Talles.
     * @example
     * // Create many Talles
     * const talle = await prisma.talle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Talles and only return the `id`
     * const talleWithIdOnly = await prisma.talle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TalleCreateManyAndReturnArgs>(args?: SelectSubset<T, TalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Talle.
     * @param {TalleDeleteArgs} args - Arguments to delete one Talle.
     * @example
     * // Delete one Talle
     * const Talle = await prisma.talle.delete({
     *   where: {
     *     // ... filter to delete one Talle
     *   }
     * })
     * 
     */
    delete<T extends TalleDeleteArgs>(args: SelectSubset<T, TalleDeleteArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Talle.
     * @param {TalleUpdateArgs} args - Arguments to update one Talle.
     * @example
     * // Update one Talle
     * const talle = await prisma.talle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TalleUpdateArgs>(args: SelectSubset<T, TalleUpdateArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Talles.
     * @param {TalleDeleteManyArgs} args - Arguments to filter Talles to delete.
     * @example
     * // Delete a few Talles
     * const { count } = await prisma.talle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TalleDeleteManyArgs>(args?: SelectSubset<T, TalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Talles
     * const talle = await prisma.talle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TalleUpdateManyArgs>(args: SelectSubset<T, TalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talles and returns the data updated in the database.
     * @param {TalleUpdateManyAndReturnArgs} args - Arguments to update many Talles.
     * @example
     * // Update many Talles
     * const talle = await prisma.talle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Talles and only return the `id`
     * const talleWithIdOnly = await prisma.talle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TalleUpdateManyAndReturnArgs>(args: SelectSubset<T, TalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Talle.
     * @param {TalleUpsertArgs} args - Arguments to update or create a Talle.
     * @example
     * // Update or create a Talle
     * const talle = await prisma.talle.upsert({
     *   create: {
     *     // ... data to create a Talle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Talle we want to update
     *   }
     * })
     */
    upsert<T extends TalleUpsertArgs>(args: SelectSubset<T, TalleUpsertArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Talles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleCountArgs} args - Arguments to filter Talles to count.
     * @example
     * // Count the number of Talles
     * const count = await prisma.talle.count({
     *   where: {
     *     // ... the filter for the Talles we want to count
     *   }
     * })
    **/
    count<T extends TalleCountArgs>(
      args?: Subset<T, TalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Talle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TalleAggregateArgs>(args: Subset<T, TalleAggregateArgs>): Prisma.PrismaPromise<GetTalleAggregateType<T>>

    /**
     * Group by Talle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TalleGroupByArgs['orderBy'] }
        : { orderBy?: TalleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Talle model
   */
  readonly fields: TalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Talle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Talle model
   */
  interface TalleFieldRefs {
    readonly id: FieldRef<"Talle", 'Int'>
    readonly nombre: FieldRef<"Talle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Talle findUnique
   */
  export type TalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle findUniqueOrThrow
   */
  export type TalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle findFirst
   */
  export type TalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talles.
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talles.
     */
    distinct?: TalleScalarFieldEnum | TalleScalarFieldEnum[]
  }

  /**
   * Talle findFirstOrThrow
   */
  export type TalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talles.
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talles.
     */
    distinct?: TalleScalarFieldEnum | TalleScalarFieldEnum[]
  }

  /**
   * Talle findMany
   */
  export type TalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Filter, which Talles to fetch.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Talles.
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talles.
     */
    distinct?: TalleScalarFieldEnum | TalleScalarFieldEnum[]
  }

  /**
   * Talle create
   */
  export type TalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The data needed to create a Talle.
     */
    data: XOR<TalleCreateInput, TalleUncheckedCreateInput>
  }

  /**
   * Talle createMany
   */
  export type TalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Talles.
     */
    data: TalleCreateManyInput | TalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Talle createManyAndReturn
   */
  export type TalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The data used to create many Talles.
     */
    data: TalleCreateManyInput | TalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Talle update
   */
  export type TalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The data needed to update a Talle.
     */
    data: XOR<TalleUpdateInput, TalleUncheckedUpdateInput>
    /**
     * Choose, which Talle to update.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle updateMany
   */
  export type TalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Talles.
     */
    data: XOR<TalleUpdateManyMutationInput, TalleUncheckedUpdateManyInput>
    /**
     * Filter which Talles to update
     */
    where?: TalleWhereInput
    /**
     * Limit how many Talles to update.
     */
    limit?: number
  }

  /**
   * Talle updateManyAndReturn
   */
  export type TalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The data used to update Talles.
     */
    data: XOR<TalleUpdateManyMutationInput, TalleUncheckedUpdateManyInput>
    /**
     * Filter which Talles to update
     */
    where?: TalleWhereInput
    /**
     * Limit how many Talles to update.
     */
    limit?: number
  }

  /**
   * Talle upsert
   */
  export type TalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The filter to search for the Talle to update in case it exists.
     */
    where: TalleWhereUniqueInput
    /**
     * In case the Talle found by the `where` argument doesn't exist, create a new Talle with this data.
     */
    create: XOR<TalleCreateInput, TalleUncheckedCreateInput>
    /**
     * In case the Talle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalleUpdateInput, TalleUncheckedUpdateInput>
  }

  /**
   * Talle delete
   */
  export type TalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Filter which Talle to delete.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle deleteMany
   */
  export type TalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talles to delete
     */
    where?: TalleWhereInput
    /**
     * Limit how many Talles to delete.
     */
    limit?: number
  }

  /**
   * Talle without action
   */
  export type TalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
  }


  /**
   * Model Color
   */

  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorAvgAggregateOutputType = {
    id: number | null
  }

  export type ColorSumAggregateOutputType = {
    id: number | null
  }

  export type ColorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ColorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ColorAvgAggregateInputType = {
    id?: true
  }

  export type ColorSumAggregateInputType = {
    id?: true
  }

  export type ColorMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Color to aggregate.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type ColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithAggregationInput | ColorOrderByWithAggregationInput[]
    by: ColorScalarFieldEnum[] | ColorScalarFieldEnum
    having?: ColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _avg?: ColorAvgAggregateInputType
    _sum?: ColorSumAggregateInputType
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }

  export type ColorGroupByOutputType = {
    id: number
    nombre: string
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends ColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type ColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["color"]>

  export type ColorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["color"]>

  export type ColorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["color"]>

  export type ColorSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["color"]>

  export type $ColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Color"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["color"]>
    composites: {}
  }

  type ColorGetPayload<S extends boolean | null | undefined | ColorDefaultArgs> = $Result.GetResult<Prisma.$ColorPayload, S>

  type ColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorCountAggregateInputType | true
    }

  export interface ColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Color'], meta: { name: 'Color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {ColorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorFindUniqueArgs>(args: SelectSubset<T, ColorFindUniqueArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Color that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorFindFirstArgs>(args?: SelectSubset<T, ColorFindFirstArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorFindManyArgs>(args?: SelectSubset<T, ColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Color.
     * @param {ColorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
     */
    create<T extends ColorCreateArgs>(args: SelectSubset<T, ColorCreateArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colors.
     * @param {ColorCreateManyArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorCreateManyArgs>(args?: SelectSubset<T, ColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colors and returns the data saved in the database.
     * @param {ColorCreateManyAndReturnArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Color.
     * @param {ColorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
     */
    delete<T extends ColorDeleteArgs>(args: SelectSubset<T, ColorDeleteArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Color.
     * @param {ColorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorUpdateArgs>(args: SelectSubset<T, ColorUpdateArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colors.
     * @param {ColorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorDeleteManyArgs>(args?: SelectSubset<T, ColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorUpdateManyArgs>(args: SelectSubset<T, ColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors and returns the data updated in the database.
     * @param {ColorUpdateManyAndReturnArgs} args - Arguments to update many Colors.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Color.
     * @param {ColorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
     */
    upsert<T extends ColorUpsertArgs>(args: SelectSubset<T, ColorUpsertArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends ColorCountArgs>(
      args?: Subset<T, ColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorGroupByArgs['orderBy'] }
        : { orderBy?: ColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Color model
   */
  readonly fields: ColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Color model
   */
  interface ColorFieldRefs {
    readonly id: FieldRef<"Color", 'Int'>
    readonly nombre: FieldRef<"Color", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Color findUnique
   */
  export type ColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findUniqueOrThrow
   */
  export type ColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findFirst
   */
  export type ColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color findFirstOrThrow
   */
  export type ColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color findMany
   */
  export type ColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Filter, which Colors to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color create
   */
  export type ColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data needed to create a Color.
     */
    data: XOR<ColorCreateInput, ColorUncheckedCreateInput>
  }

  /**
   * Color createMany
   */
  export type ColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Color createManyAndReturn
   */
  export type ColorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Color update
   */
  export type ColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data needed to update a Color.
     */
    data: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
    /**
     * Choose, which Color to update.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color updateMany
   */
  export type ColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to update.
     */
    limit?: number
  }

  /**
   * Color updateManyAndReturn
   */
  export type ColorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to update.
     */
    limit?: number
  }

  /**
   * Color upsert
   */
  export type ColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The filter to search for the Color to update in case it exists.
     */
    where: ColorWhereUniqueInput
    /**
     * In case the Color found by the `where` argument doesn't exist, create a new Color with this data.
     */
    create: XOR<ColorCreateInput, ColorUncheckedCreateInput>
    /**
     * In case the Color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
  }

  /**
   * Color delete
   */
  export type ColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Filter which Color to delete.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color deleteMany
   */
  export type ColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colors to delete
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to delete.
     */
    limit?: number
  }

  /**
   * Color without action
   */
  export type ColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    provedor_id: number | null
    marca_id: number | null
    categoria_id: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    provedor_id: number | null
    marca_id: number | null
    categoria_id: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
    provedor_id: number | null
    marca_id: number | null
    categoria_id: number | null
    sku: string | null
    img_url: string | null
    observacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
    activo: boolean | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
    provedor_id: number | null
    marca_id: number | null
    categoria_id: number | null
    sku: string | null
    img_url: string | null
    observacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
    activo: boolean | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    descripcion: number
    provedor_id: number
    marca_id: number
    categoria_id: number
    sku: number
    img_url: number
    observacion: number
    createdAt: number
    updatedAt: number
    activo: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    provedor_id?: true
    marca_id?: true
    categoria_id?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    provedor_id?: true
    marca_id?: true
    categoria_id?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    descripcion?: true
    provedor_id?: true
    marca_id?: true
    categoria_id?: true
    sku?: true
    img_url?: true
    observacion?: true
    createdAt?: true
    updatedAt?: true
    activo?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    descripcion?: true
    provedor_id?: true
    marca_id?: true
    categoria_id?: true
    sku?: true
    img_url?: true
    observacion?: true
    createdAt?: true
    updatedAt?: true
    activo?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    descripcion?: true
    provedor_id?: true
    marca_id?: true
    categoria_id?: true
    sku?: true
    img_url?: true
    observacion?: true
    createdAt?: true
    updatedAt?: true
    activo?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    descripcion: string
    provedor_id: number | null
    marca_id: number | null
    categoria_id: number | null
    sku: string | null
    img_url: string | null
    observacion: string | null
    createdAt: Date
    updatedAt: Date
    activo: boolean
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    provedor_id?: boolean
    marca_id?: boolean
    categoria_id?: boolean
    sku?: boolean
    img_url?: boolean
    observacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activo?: boolean
    variantes?: boolean | Producto$variantesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    provedor_id?: boolean
    marca_id?: boolean
    categoria_id?: boolean
    sku?: boolean
    img_url?: boolean
    observacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activo?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    provedor_id?: boolean
    marca_id?: boolean
    categoria_id?: boolean
    sku?: boolean
    img_url?: boolean
    observacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activo?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    descripcion?: boolean
    provedor_id?: boolean
    marca_id?: boolean
    categoria_id?: boolean
    sku?: boolean
    img_url?: boolean
    observacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activo?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion" | "provedor_id" | "marca_id" | "categoria_id" | "sku" | "img_url" | "observacion" | "createdAt" | "updatedAt" | "activo", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantes?: boolean | Producto$variantesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      variantes: Prisma.$variante_productoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descripcion: string
      provedor_id: number | null
      marca_id: number | null
      categoria_id: number | null
      sku: string | null
      img_url: string | null
      observacion: string | null
      createdAt: Date
      updatedAt: Date
      activo: boolean
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variantes<T extends Producto$variantesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$variantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly provedor_id: FieldRef<"Producto", 'Int'>
    readonly marca_id: FieldRef<"Producto", 'Int'>
    readonly categoria_id: FieldRef<"Producto", 'Int'>
    readonly sku: FieldRef<"Producto", 'String'>
    readonly img_url: FieldRef<"Producto", 'String'>
    readonly observacion: FieldRef<"Producto", 'String'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
    readonly activo: FieldRef<"Producto", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.variantes
   */
  export type Producto$variantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    where?: variante_productoWhereInput
    orderBy?: variante_productoOrderByWithRelationInput | variante_productoOrderByWithRelationInput[]
    cursor?: variante_productoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Variante_productoScalarFieldEnum | Variante_productoScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model variante_producto
   */

  export type AggregateVariante_producto = {
    _count: Variante_productoCountAggregateOutputType | null
    _avg: Variante_productoAvgAggregateOutputType | null
    _sum: Variante_productoSumAggregateOutputType | null
    _min: Variante_productoMinAggregateOutputType | null
    _max: Variante_productoMaxAggregateOutputType | null
  }

  export type Variante_productoAvgAggregateOutputType = {
    id: number | null
    producto_id: number | null
    talle_id: number | null
    color_id: number | null
    precio: number | null
    stock: number | null
  }

  export type Variante_productoSumAggregateOutputType = {
    id: number | null
    producto_id: number | null
    talle_id: number | null
    color_id: number | null
    precio: number | null
    stock: number | null
  }

  export type Variante_productoMinAggregateOutputType = {
    id: number | null
    producto_id: number | null
    talle_id: number | null
    color_id: number | null
    precio: number | null
    stock: number | null
    sku: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Variante_productoMaxAggregateOutputType = {
    id: number | null
    producto_id: number | null
    talle_id: number | null
    color_id: number | null
    precio: number | null
    stock: number | null
    sku: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Variante_productoCountAggregateOutputType = {
    id: number
    producto_id: number
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Variante_productoAvgAggregateInputType = {
    id?: true
    producto_id?: true
    talle_id?: true
    color_id?: true
    precio?: true
    stock?: true
  }

  export type Variante_productoSumAggregateInputType = {
    id?: true
    producto_id?: true
    talle_id?: true
    color_id?: true
    precio?: true
    stock?: true
  }

  export type Variante_productoMinAggregateInputType = {
    id?: true
    producto_id?: true
    talle_id?: true
    color_id?: true
    precio?: true
    stock?: true
    sku?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Variante_productoMaxAggregateInputType = {
    id?: true
    producto_id?: true
    talle_id?: true
    color_id?: true
    precio?: true
    stock?: true
    sku?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Variante_productoCountAggregateInputType = {
    id?: true
    producto_id?: true
    talle_id?: true
    color_id?: true
    precio?: true
    stock?: true
    sku?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Variante_productoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variante_producto to aggregate.
     */
    where?: variante_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variante_productos to fetch.
     */
    orderBy?: variante_productoOrderByWithRelationInput | variante_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variante_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variante_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variante_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variante_productos
    **/
    _count?: true | Variante_productoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Variante_productoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Variante_productoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Variante_productoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Variante_productoMaxAggregateInputType
  }

  export type GetVariante_productoAggregateType<T extends Variante_productoAggregateArgs> = {
        [P in keyof T & keyof AggregateVariante_producto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariante_producto[P]>
      : GetScalarType<T[P], AggregateVariante_producto[P]>
  }




  export type variante_productoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variante_productoWhereInput
    orderBy?: variante_productoOrderByWithAggregationInput | variante_productoOrderByWithAggregationInput[]
    by: Variante_productoScalarFieldEnum[] | Variante_productoScalarFieldEnum
    having?: variante_productoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Variante_productoCountAggregateInputType | true
    _avg?: Variante_productoAvgAggregateInputType
    _sum?: Variante_productoSumAggregateInputType
    _min?: Variante_productoMinAggregateInputType
    _max?: Variante_productoMaxAggregateInputType
  }

  export type Variante_productoGroupByOutputType = {
    id: number
    producto_id: number
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: Variante_productoCountAggregateOutputType | null
    _avg: Variante_productoAvgAggregateOutputType | null
    _sum: Variante_productoSumAggregateOutputType | null
    _min: Variante_productoMinAggregateOutputType | null
    _max: Variante_productoMaxAggregateOutputType | null
  }

  type GetVariante_productoGroupByPayload<T extends variante_productoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Variante_productoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Variante_productoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Variante_productoGroupByOutputType[P]>
            : GetScalarType<T[P], Variante_productoGroupByOutputType[P]>
        }
      >
    >


  export type variante_productoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talle_id?: boolean
    color_id?: boolean
    precio?: boolean
    stock?: boolean
    sku?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variante_producto"]>

  export type variante_productoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talle_id?: boolean
    color_id?: boolean
    precio?: boolean
    stock?: boolean
    sku?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variante_producto"]>

  export type variante_productoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talle_id?: boolean
    color_id?: boolean
    precio?: boolean
    stock?: boolean
    sku?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variante_producto"]>

  export type variante_productoSelectScalar = {
    id?: boolean
    producto_id?: boolean
    talle_id?: boolean
    color_id?: boolean
    precio?: boolean
    stock?: boolean
    sku?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type variante_productoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "producto_id" | "talle_id" | "color_id" | "precio" | "stock" | "sku" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["variante_producto"]>
  export type variante_productoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type variante_productoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type variante_productoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $variante_productoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variante_producto"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      producto_id: number
      talle_id: number
      color_id: number
      precio: number
      stock: number
      sku: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["variante_producto"]>
    composites: {}
  }

  type variante_productoGetPayload<S extends boolean | null | undefined | variante_productoDefaultArgs> = $Result.GetResult<Prisma.$variante_productoPayload, S>

  type variante_productoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variante_productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Variante_productoCountAggregateInputType | true
    }

  export interface variante_productoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variante_producto'], meta: { name: 'variante_producto' } }
    /**
     * Find zero or one Variante_producto that matches the filter.
     * @param {variante_productoFindUniqueArgs} args - Arguments to find a Variante_producto
     * @example
     * // Get one Variante_producto
     * const variante_producto = await prisma.variante_producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variante_productoFindUniqueArgs>(args: SelectSubset<T, variante_productoFindUniqueArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variante_producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variante_productoFindUniqueOrThrowArgs} args - Arguments to find a Variante_producto
     * @example
     * // Get one Variante_producto
     * const variante_producto = await prisma.variante_producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variante_productoFindUniqueOrThrowArgs>(args: SelectSubset<T, variante_productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variante_producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variante_productoFindFirstArgs} args - Arguments to find a Variante_producto
     * @example
     * // Get one Variante_producto
     * const variante_producto = await prisma.variante_producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variante_productoFindFirstArgs>(args?: SelectSubset<T, variante_productoFindFirstArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variante_producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variante_productoFindFirstOrThrowArgs} args - Arguments to find a Variante_producto
     * @example
     * // Get one Variante_producto
     * const variante_producto = await prisma.variante_producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variante_productoFindFirstOrThrowArgs>(args?: SelectSubset<T, variante_productoFindFirstOrThrowArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variante_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variante_productoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variante_productos
     * const variante_productos = await prisma.variante_producto.findMany()
     * 
     * // Get first 10 Variante_productos
     * const variante_productos = await prisma.variante_producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variante_productoWithIdOnly = await prisma.variante_producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variante_productoFindManyArgs>(args?: SelectSubset<T, variante_productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variante_producto.
     * @param {variante_productoCreateArgs} args - Arguments to create a Variante_producto.
     * @example
     * // Create one Variante_producto
     * const Variante_producto = await prisma.variante_producto.create({
     *   data: {
     *     // ... data to create a Variante_producto
     *   }
     * })
     * 
     */
    create<T extends variante_productoCreateArgs>(args: SelectSubset<T, variante_productoCreateArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variante_productos.
     * @param {variante_productoCreateManyArgs} args - Arguments to create many Variante_productos.
     * @example
     * // Create many Variante_productos
     * const variante_producto = await prisma.variante_producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variante_productoCreateManyArgs>(args?: SelectSubset<T, variante_productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variante_productos and returns the data saved in the database.
     * @param {variante_productoCreateManyAndReturnArgs} args - Arguments to create many Variante_productos.
     * @example
     * // Create many Variante_productos
     * const variante_producto = await prisma.variante_producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variante_productos and only return the `id`
     * const variante_productoWithIdOnly = await prisma.variante_producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends variante_productoCreateManyAndReturnArgs>(args?: SelectSubset<T, variante_productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variante_producto.
     * @param {variante_productoDeleteArgs} args - Arguments to delete one Variante_producto.
     * @example
     * // Delete one Variante_producto
     * const Variante_producto = await prisma.variante_producto.delete({
     *   where: {
     *     // ... filter to delete one Variante_producto
     *   }
     * })
     * 
     */
    delete<T extends variante_productoDeleteArgs>(args: SelectSubset<T, variante_productoDeleteArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variante_producto.
     * @param {variante_productoUpdateArgs} args - Arguments to update one Variante_producto.
     * @example
     * // Update one Variante_producto
     * const variante_producto = await prisma.variante_producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variante_productoUpdateArgs>(args: SelectSubset<T, variante_productoUpdateArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variante_productos.
     * @param {variante_productoDeleteManyArgs} args - Arguments to filter Variante_productos to delete.
     * @example
     * // Delete a few Variante_productos
     * const { count } = await prisma.variante_producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variante_productoDeleteManyArgs>(args?: SelectSubset<T, variante_productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variante_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variante_productoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variante_productos
     * const variante_producto = await prisma.variante_producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variante_productoUpdateManyArgs>(args: SelectSubset<T, variante_productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variante_productos and returns the data updated in the database.
     * @param {variante_productoUpdateManyAndReturnArgs} args - Arguments to update many Variante_productos.
     * @example
     * // Update many Variante_productos
     * const variante_producto = await prisma.variante_producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variante_productos and only return the `id`
     * const variante_productoWithIdOnly = await prisma.variante_producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends variante_productoUpdateManyAndReturnArgs>(args: SelectSubset<T, variante_productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variante_producto.
     * @param {variante_productoUpsertArgs} args - Arguments to update or create a Variante_producto.
     * @example
     * // Update or create a Variante_producto
     * const variante_producto = await prisma.variante_producto.upsert({
     *   create: {
     *     // ... data to create a Variante_producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variante_producto we want to update
     *   }
     * })
     */
    upsert<T extends variante_productoUpsertArgs>(args: SelectSubset<T, variante_productoUpsertArgs<ExtArgs>>): Prisma__variante_productoClient<$Result.GetResult<Prisma.$variante_productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variante_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variante_productoCountArgs} args - Arguments to filter Variante_productos to count.
     * @example
     * // Count the number of Variante_productos
     * const count = await prisma.variante_producto.count({
     *   where: {
     *     // ... the filter for the Variante_productos we want to count
     *   }
     * })
    **/
    count<T extends variante_productoCountArgs>(
      args?: Subset<T, variante_productoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Variante_productoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variante_producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variante_productoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Variante_productoAggregateArgs>(args: Subset<T, Variante_productoAggregateArgs>): Prisma.PrismaPromise<GetVariante_productoAggregateType<T>>

    /**
     * Group by Variante_producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variante_productoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends variante_productoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variante_productoGroupByArgs['orderBy'] }
        : { orderBy?: variante_productoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, variante_productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariante_productoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variante_producto model
   */
  readonly fields: variante_productoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variante_producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variante_productoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the variante_producto model
   */
  interface variante_productoFieldRefs {
    readonly id: FieldRef<"variante_producto", 'Int'>
    readonly producto_id: FieldRef<"variante_producto", 'Int'>
    readonly talle_id: FieldRef<"variante_producto", 'Int'>
    readonly color_id: FieldRef<"variante_producto", 'Int'>
    readonly precio: FieldRef<"variante_producto", 'Float'>
    readonly stock: FieldRef<"variante_producto", 'Int'>
    readonly sku: FieldRef<"variante_producto", 'String'>
    readonly activo: FieldRef<"variante_producto", 'Boolean'>
    readonly createdAt: FieldRef<"variante_producto", 'DateTime'>
    readonly updatedAt: FieldRef<"variante_producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * variante_producto findUnique
   */
  export type variante_productoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * Filter, which variante_producto to fetch.
     */
    where: variante_productoWhereUniqueInput
  }

  /**
   * variante_producto findUniqueOrThrow
   */
  export type variante_productoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * Filter, which variante_producto to fetch.
     */
    where: variante_productoWhereUniqueInput
  }

  /**
   * variante_producto findFirst
   */
  export type variante_productoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * Filter, which variante_producto to fetch.
     */
    where?: variante_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variante_productos to fetch.
     */
    orderBy?: variante_productoOrderByWithRelationInput | variante_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variante_productos.
     */
    cursor?: variante_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variante_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variante_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variante_productos.
     */
    distinct?: Variante_productoScalarFieldEnum | Variante_productoScalarFieldEnum[]
  }

  /**
   * variante_producto findFirstOrThrow
   */
  export type variante_productoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * Filter, which variante_producto to fetch.
     */
    where?: variante_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variante_productos to fetch.
     */
    orderBy?: variante_productoOrderByWithRelationInput | variante_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variante_productos.
     */
    cursor?: variante_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variante_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variante_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variante_productos.
     */
    distinct?: Variante_productoScalarFieldEnum | Variante_productoScalarFieldEnum[]
  }

  /**
   * variante_producto findMany
   */
  export type variante_productoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * Filter, which variante_productos to fetch.
     */
    where?: variante_productoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variante_productos to fetch.
     */
    orderBy?: variante_productoOrderByWithRelationInput | variante_productoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variante_productos.
     */
    cursor?: variante_productoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variante_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variante_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variante_productos.
     */
    distinct?: Variante_productoScalarFieldEnum | Variante_productoScalarFieldEnum[]
  }

  /**
   * variante_producto create
   */
  export type variante_productoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * The data needed to create a variante_producto.
     */
    data: XOR<variante_productoCreateInput, variante_productoUncheckedCreateInput>
  }

  /**
   * variante_producto createMany
   */
  export type variante_productoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variante_productos.
     */
    data: variante_productoCreateManyInput | variante_productoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variante_producto createManyAndReturn
   */
  export type variante_productoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * The data used to create many variante_productos.
     */
    data: variante_productoCreateManyInput | variante_productoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * variante_producto update
   */
  export type variante_productoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * The data needed to update a variante_producto.
     */
    data: XOR<variante_productoUpdateInput, variante_productoUncheckedUpdateInput>
    /**
     * Choose, which variante_producto to update.
     */
    where: variante_productoWhereUniqueInput
  }

  /**
   * variante_producto updateMany
   */
  export type variante_productoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variante_productos.
     */
    data: XOR<variante_productoUpdateManyMutationInput, variante_productoUncheckedUpdateManyInput>
    /**
     * Filter which variante_productos to update
     */
    where?: variante_productoWhereInput
    /**
     * Limit how many variante_productos to update.
     */
    limit?: number
  }

  /**
   * variante_producto updateManyAndReturn
   */
  export type variante_productoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * The data used to update variante_productos.
     */
    data: XOR<variante_productoUpdateManyMutationInput, variante_productoUncheckedUpdateManyInput>
    /**
     * Filter which variante_productos to update
     */
    where?: variante_productoWhereInput
    /**
     * Limit how many variante_productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * variante_producto upsert
   */
  export type variante_productoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * The filter to search for the variante_producto to update in case it exists.
     */
    where: variante_productoWhereUniqueInput
    /**
     * In case the variante_producto found by the `where` argument doesn't exist, create a new variante_producto with this data.
     */
    create: XOR<variante_productoCreateInput, variante_productoUncheckedCreateInput>
    /**
     * In case the variante_producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variante_productoUpdateInput, variante_productoUncheckedUpdateInput>
  }

  /**
   * variante_producto delete
   */
  export type variante_productoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
    /**
     * Filter which variante_producto to delete.
     */
    where: variante_productoWhereUniqueInput
  }

  /**
   * variante_producto deleteMany
   */
  export type variante_productoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variante_productos to delete
     */
    where?: variante_productoWhereInput
    /**
     * Limit how many variante_productos to delete.
     */
    limit?: number
  }

  /**
   * variante_producto without action
   */
  export type variante_productoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variante_producto
     */
    select?: variante_productoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variante_producto
     */
    omit?: variante_productoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variante_productoInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    total: number | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    total: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    fecha: Date | null
    total: number | null
    observacion: string | null
    numero_venta: string | null
    tipo_pago: string | null
    tipo_venta: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    fecha: Date | null
    total: number | null
    observacion: string | null
    numero_venta: string | null
    tipo_pago: string | null
    tipo_venta: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    cliente_id: number
    fecha: number
    total: number
    observacion: number
    numero_venta: number
    tipo_pago: number
    tipo_venta: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    total?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    cliente_id?: true
    total?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    cliente_id?: true
    fecha?: true
    total?: true
    observacion?: true
    numero_venta?: true
    tipo_pago?: true
    tipo_venta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    cliente_id?: true
    fecha?: true
    total?: true
    observacion?: true
    numero_venta?: true
    tipo_pago?: true
    tipo_venta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    cliente_id?: true
    fecha?: true
    total?: true
    observacion?: true
    numero_venta?: true
    tipo_pago?: true
    tipo_venta?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    cliente_id: number
    fecha: Date
    total: number
    observacion: string | null
    numero_venta: string
    tipo_pago: string
    tipo_venta: string
    createdAt: Date
    updatedAt: Date
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    fecha?: boolean
    total?: boolean
    observacion?: boolean
    numero_venta?: boolean
    tipo_pago?: boolean
    tipo_venta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    fecha?: boolean
    total?: boolean
    observacion?: boolean
    numero_venta?: boolean
    tipo_pago?: boolean
    tipo_venta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    fecha?: boolean
    total?: boolean
    observacion?: boolean
    numero_venta?: boolean
    tipo_pago?: boolean
    tipo_venta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    cliente_id?: boolean
    fecha?: boolean
    total?: boolean
    observacion?: boolean
    numero_venta?: boolean
    tipo_pago?: boolean
    tipo_venta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cliente_id" | "fecha" | "total" | "observacion" | "numero_venta" | "tipo_pago" | "tipo_venta" | "createdAt" | "updatedAt", ExtArgs["result"]["venta"]>

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cliente_id: number
      fecha: Date
      total: number
      observacion: string | null
      numero_venta: string
      tipo_pago: string
      tipo_venta: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly cliente_id: FieldRef<"Venta", 'Int'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly total: FieldRef<"Venta", 'Float'>
    readonly observacion: FieldRef<"Venta", 'String'>
    readonly numero_venta: FieldRef<"Venta", 'String'>
    readonly tipo_pago: FieldRef<"Venta", 'String'>
    readonly tipo_venta: FieldRef<"Venta", 'String'>
    readonly createdAt: FieldRef<"Venta", 'DateTime'>
    readonly updatedAt: FieldRef<"Venta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
  }


  /**
   * Model detalle_venta
   */

  export type AggregateDetalle_venta = {
    _count: Detalle_ventaCountAggregateOutputType | null
    _avg: Detalle_ventaAvgAggregateOutputType | null
    _sum: Detalle_ventaSumAggregateOutputType | null
    _min: Detalle_ventaMinAggregateOutputType | null
    _max: Detalle_ventaMaxAggregateOutputType | null
  }

  export type Detalle_ventaAvgAggregateOutputType = {
    id: number | null
    venta_id: number | null
    variante_id: number | null
    cantidad: number | null
    precio: number | null
  }

  export type Detalle_ventaSumAggregateOutputType = {
    id: number | null
    venta_id: number | null
    variante_id: number | null
    cantidad: number | null
    precio: number | null
  }

  export type Detalle_ventaMinAggregateOutputType = {
    id: number | null
    venta_id: number | null
    variante_id: number | null
    cantidad: number | null
    precio: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Detalle_ventaMaxAggregateOutputType = {
    id: number | null
    venta_id: number | null
    variante_id: number | null
    cantidad: number | null
    precio: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Detalle_ventaCountAggregateOutputType = {
    id: number
    venta_id: number
    variante_id: number
    cantidad: number
    precio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Detalle_ventaAvgAggregateInputType = {
    id?: true
    venta_id?: true
    variante_id?: true
    cantidad?: true
    precio?: true
  }

  export type Detalle_ventaSumAggregateInputType = {
    id?: true
    venta_id?: true
    variante_id?: true
    cantidad?: true
    precio?: true
  }

  export type Detalle_ventaMinAggregateInputType = {
    id?: true
    venta_id?: true
    variante_id?: true
    cantidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Detalle_ventaMaxAggregateInputType = {
    id?: true
    venta_id?: true
    variante_id?: true
    cantidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Detalle_ventaCountAggregateInputType = {
    id?: true
    venta_id?: true
    variante_id?: true
    cantidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Detalle_ventaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_venta to aggregate.
     */
    where?: detalle_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventaOrderByWithRelationInput | detalle_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_ventas
    **/
    _count?: true | Detalle_ventaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_ventaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_ventaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_ventaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_ventaMaxAggregateInputType
  }

  export type GetDetalle_ventaAggregateType<T extends Detalle_ventaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_venta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_venta[P]>
      : GetScalarType<T[P], AggregateDetalle_venta[P]>
  }




  export type detalle_ventaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_ventaWhereInput
    orderBy?: detalle_ventaOrderByWithAggregationInput | detalle_ventaOrderByWithAggregationInput[]
    by: Detalle_ventaScalarFieldEnum[] | Detalle_ventaScalarFieldEnum
    having?: detalle_ventaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_ventaCountAggregateInputType | true
    _avg?: Detalle_ventaAvgAggregateInputType
    _sum?: Detalle_ventaSumAggregateInputType
    _min?: Detalle_ventaMinAggregateInputType
    _max?: Detalle_ventaMaxAggregateInputType
  }

  export type Detalle_ventaGroupByOutputType = {
    id: number
    venta_id: number
    variante_id: number
    cantidad: number
    precio: number
    createdAt: Date
    updatedAt: Date
    _count: Detalle_ventaCountAggregateOutputType | null
    _avg: Detalle_ventaAvgAggregateOutputType | null
    _sum: Detalle_ventaSumAggregateOutputType | null
    _min: Detalle_ventaMinAggregateOutputType | null
    _max: Detalle_ventaMaxAggregateOutputType | null
  }

  type GetDetalle_ventaGroupByPayload<T extends detalle_ventaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_ventaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_ventaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_ventaGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_ventaGroupByOutputType[P]>
        }
      >
    >


  export type detalle_ventaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["detalle_venta"]>

  export type detalle_ventaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["detalle_venta"]>

  export type detalle_ventaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["detalle_venta"]>

  export type detalle_ventaSelectScalar = {
    id?: boolean
    venta_id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type detalle_ventaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venta_id" | "variante_id" | "cantidad" | "precio" | "createdAt" | "updatedAt", ExtArgs["result"]["detalle_venta"]>

  export type $detalle_ventaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_venta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venta_id: number
      variante_id: number
      cantidad: number
      precio: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["detalle_venta"]>
    composites: {}
  }

  type detalle_ventaGetPayload<S extends boolean | null | undefined | detalle_ventaDefaultArgs> = $Result.GetResult<Prisma.$detalle_ventaPayload, S>

  type detalle_ventaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_ventaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_ventaCountAggregateInputType | true
    }

  export interface detalle_ventaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_venta'], meta: { name: 'detalle_venta' } }
    /**
     * Find zero or one Detalle_venta that matches the filter.
     * @param {detalle_ventaFindUniqueArgs} args - Arguments to find a Detalle_venta
     * @example
     * // Get one Detalle_venta
     * const detalle_venta = await prisma.detalle_venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_ventaFindUniqueArgs>(args: SelectSubset<T, detalle_ventaFindUniqueArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_ventaFindUniqueOrThrowArgs} args - Arguments to find a Detalle_venta
     * @example
     * // Get one Detalle_venta
     * const detalle_venta = await prisma.detalle_venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_ventaFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_ventaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventaFindFirstArgs} args - Arguments to find a Detalle_venta
     * @example
     * // Get one Detalle_venta
     * const detalle_venta = await prisma.detalle_venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_ventaFindFirstArgs>(args?: SelectSubset<T, detalle_ventaFindFirstArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventaFindFirstOrThrowArgs} args - Arguments to find a Detalle_venta
     * @example
     * // Get one Detalle_venta
     * const detalle_venta = await prisma.detalle_venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_ventaFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_ventaFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_ventas
     * const detalle_ventas = await prisma.detalle_venta.findMany()
     * 
     * // Get first 10 Detalle_ventas
     * const detalle_ventas = await prisma.detalle_venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalle_ventaWithIdOnly = await prisma.detalle_venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalle_ventaFindManyArgs>(args?: SelectSubset<T, detalle_ventaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_venta.
     * @param {detalle_ventaCreateArgs} args - Arguments to create a Detalle_venta.
     * @example
     * // Create one Detalle_venta
     * const Detalle_venta = await prisma.detalle_venta.create({
     *   data: {
     *     // ... data to create a Detalle_venta
     *   }
     * })
     * 
     */
    create<T extends detalle_ventaCreateArgs>(args: SelectSubset<T, detalle_ventaCreateArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_ventas.
     * @param {detalle_ventaCreateManyArgs} args - Arguments to create many Detalle_ventas.
     * @example
     * // Create many Detalle_ventas
     * const detalle_venta = await prisma.detalle_venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_ventaCreateManyArgs>(args?: SelectSubset<T, detalle_ventaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalle_ventas and returns the data saved in the database.
     * @param {detalle_ventaCreateManyAndReturnArgs} args - Arguments to create many Detalle_ventas.
     * @example
     * // Create many Detalle_ventas
     * const detalle_venta = await prisma.detalle_venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalle_ventas and only return the `id`
     * const detalle_ventaWithIdOnly = await prisma.detalle_venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalle_ventaCreateManyAndReturnArgs>(args?: SelectSubset<T, detalle_ventaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalle_venta.
     * @param {detalle_ventaDeleteArgs} args - Arguments to delete one Detalle_venta.
     * @example
     * // Delete one Detalle_venta
     * const Detalle_venta = await prisma.detalle_venta.delete({
     *   where: {
     *     // ... filter to delete one Detalle_venta
     *   }
     * })
     * 
     */
    delete<T extends detalle_ventaDeleteArgs>(args: SelectSubset<T, detalle_ventaDeleteArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_venta.
     * @param {detalle_ventaUpdateArgs} args - Arguments to update one Detalle_venta.
     * @example
     * // Update one Detalle_venta
     * const detalle_venta = await prisma.detalle_venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_ventaUpdateArgs>(args: SelectSubset<T, detalle_ventaUpdateArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_ventas.
     * @param {detalle_ventaDeleteManyArgs} args - Arguments to filter Detalle_ventas to delete.
     * @example
     * // Delete a few Detalle_ventas
     * const { count } = await prisma.detalle_venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_ventaDeleteManyArgs>(args?: SelectSubset<T, detalle_ventaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_ventas
     * const detalle_venta = await prisma.detalle_venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_ventaUpdateManyArgs>(args: SelectSubset<T, detalle_ventaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_ventas and returns the data updated in the database.
     * @param {detalle_ventaUpdateManyAndReturnArgs} args - Arguments to update many Detalle_ventas.
     * @example
     * // Update many Detalle_ventas
     * const detalle_venta = await prisma.detalle_venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalle_ventas and only return the `id`
     * const detalle_ventaWithIdOnly = await prisma.detalle_venta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detalle_ventaUpdateManyAndReturnArgs>(args: SelectSubset<T, detalle_ventaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalle_venta.
     * @param {detalle_ventaUpsertArgs} args - Arguments to update or create a Detalle_venta.
     * @example
     * // Update or create a Detalle_venta
     * const detalle_venta = await prisma.detalle_venta.upsert({
     *   create: {
     *     // ... data to create a Detalle_venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_venta we want to update
     *   }
     * })
     */
    upsert<T extends detalle_ventaUpsertArgs>(args: SelectSubset<T, detalle_ventaUpsertArgs<ExtArgs>>): Prisma__detalle_ventaClient<$Result.GetResult<Prisma.$detalle_ventaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventaCountArgs} args - Arguments to filter Detalle_ventas to count.
     * @example
     * // Count the number of Detalle_ventas
     * const count = await prisma.detalle_venta.count({
     *   where: {
     *     // ... the filter for the Detalle_ventas we want to count
     *   }
     * })
    **/
    count<T extends detalle_ventaCountArgs>(
      args?: Subset<T, detalle_ventaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_ventaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_ventaAggregateArgs>(args: Subset<T, Detalle_ventaAggregateArgs>): Prisma.PrismaPromise<GetDetalle_ventaAggregateType<T>>

    /**
     * Group by Detalle_venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_ventaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_ventaGroupByArgs['orderBy'] }
        : { orderBy?: detalle_ventaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_ventaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_ventaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_venta model
   */
  readonly fields: detalle_ventaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_ventaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_venta model
   */
  interface detalle_ventaFieldRefs {
    readonly id: FieldRef<"detalle_venta", 'Int'>
    readonly venta_id: FieldRef<"detalle_venta", 'Int'>
    readonly variante_id: FieldRef<"detalle_venta", 'Int'>
    readonly cantidad: FieldRef<"detalle_venta", 'Int'>
    readonly precio: FieldRef<"detalle_venta", 'Float'>
    readonly createdAt: FieldRef<"detalle_venta", 'DateTime'>
    readonly updatedAt: FieldRef<"detalle_venta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detalle_venta findUnique
   */
  export type detalle_ventaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * Filter, which detalle_venta to fetch.
     */
    where: detalle_ventaWhereUniqueInput
  }

  /**
   * detalle_venta findUniqueOrThrow
   */
  export type detalle_ventaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * Filter, which detalle_venta to fetch.
     */
    where: detalle_ventaWhereUniqueInput
  }

  /**
   * detalle_venta findFirst
   */
  export type detalle_ventaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * Filter, which detalle_venta to fetch.
     */
    where?: detalle_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventaOrderByWithRelationInput | detalle_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_ventas.
     */
    cursor?: detalle_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_ventas.
     */
    distinct?: Detalle_ventaScalarFieldEnum | Detalle_ventaScalarFieldEnum[]
  }

  /**
   * detalle_venta findFirstOrThrow
   */
  export type detalle_ventaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * Filter, which detalle_venta to fetch.
     */
    where?: detalle_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventaOrderByWithRelationInput | detalle_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_ventas.
     */
    cursor?: detalle_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_ventas.
     */
    distinct?: Detalle_ventaScalarFieldEnum | Detalle_ventaScalarFieldEnum[]
  }

  /**
   * detalle_venta findMany
   */
  export type detalle_ventaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * Filter, which detalle_ventas to fetch.
     */
    where?: detalle_ventaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventaOrderByWithRelationInput | detalle_ventaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_ventas.
     */
    cursor?: detalle_ventaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_ventas.
     */
    distinct?: Detalle_ventaScalarFieldEnum | Detalle_ventaScalarFieldEnum[]
  }

  /**
   * detalle_venta create
   */
  export type detalle_ventaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * The data needed to create a detalle_venta.
     */
    data: XOR<detalle_ventaCreateInput, detalle_ventaUncheckedCreateInput>
  }

  /**
   * detalle_venta createMany
   */
  export type detalle_ventaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_ventas.
     */
    data: detalle_ventaCreateManyInput | detalle_ventaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_venta createManyAndReturn
   */
  export type detalle_ventaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * The data used to create many detalle_ventas.
     */
    data: detalle_ventaCreateManyInput | detalle_ventaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_venta update
   */
  export type detalle_ventaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * The data needed to update a detalle_venta.
     */
    data: XOR<detalle_ventaUpdateInput, detalle_ventaUncheckedUpdateInput>
    /**
     * Choose, which detalle_venta to update.
     */
    where: detalle_ventaWhereUniqueInput
  }

  /**
   * detalle_venta updateMany
   */
  export type detalle_ventaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_ventas.
     */
    data: XOR<detalle_ventaUpdateManyMutationInput, detalle_ventaUncheckedUpdateManyInput>
    /**
     * Filter which detalle_ventas to update
     */
    where?: detalle_ventaWhereInput
    /**
     * Limit how many detalle_ventas to update.
     */
    limit?: number
  }

  /**
   * detalle_venta updateManyAndReturn
   */
  export type detalle_ventaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * The data used to update detalle_ventas.
     */
    data: XOR<detalle_ventaUpdateManyMutationInput, detalle_ventaUncheckedUpdateManyInput>
    /**
     * Filter which detalle_ventas to update
     */
    where?: detalle_ventaWhereInput
    /**
     * Limit how many detalle_ventas to update.
     */
    limit?: number
  }

  /**
   * detalle_venta upsert
   */
  export type detalle_ventaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * The filter to search for the detalle_venta to update in case it exists.
     */
    where: detalle_ventaWhereUniqueInput
    /**
     * In case the detalle_venta found by the `where` argument doesn't exist, create a new detalle_venta with this data.
     */
    create: XOR<detalle_ventaCreateInput, detalle_ventaUncheckedCreateInput>
    /**
     * In case the detalle_venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_ventaUpdateInput, detalle_ventaUncheckedUpdateInput>
  }

  /**
   * detalle_venta delete
   */
  export type detalle_ventaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
    /**
     * Filter which detalle_venta to delete.
     */
    where: detalle_ventaWhereUniqueInput
  }

  /**
   * detalle_venta deleteMany
   */
  export type detalle_ventaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_ventas to delete
     */
    where?: detalle_ventaWhereInput
    /**
     * Limit how many detalle_ventas to delete.
     */
    limit?: number
  }

  /**
   * detalle_venta without action
   */
  export type detalle_ventaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_venta
     */
    select?: detalle_ventaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_venta
     */
    omit?: detalle_ventaOmit<ExtArgs> | null
  }


  /**
   * Model stock_movimiento
   */

  export type AggregateStock_movimiento = {
    _count: Stock_movimientoCountAggregateOutputType | null
    _avg: Stock_movimientoAvgAggregateOutputType | null
    _sum: Stock_movimientoSumAggregateOutputType | null
    _min: Stock_movimientoMinAggregateOutputType | null
    _max: Stock_movimientoMaxAggregateOutputType | null
  }

  export type Stock_movimientoAvgAggregateOutputType = {
    id: number | null
    variante_id: number | null
    cantidad: number | null
  }

  export type Stock_movimientoSumAggregateOutputType = {
    id: number | null
    variante_id: number | null
    cantidad: number | null
  }

  export type Stock_movimientoMinAggregateOutputType = {
    id: number | null
    variante_id: number | null
    tipo: string | null
    cantidad: number | null
    referencia: string | null
    fecha: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Stock_movimientoMaxAggregateOutputType = {
    id: number | null
    variante_id: number | null
    tipo: string | null
    cantidad: number | null
    referencia: string | null
    fecha: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Stock_movimientoCountAggregateOutputType = {
    id: number
    variante_id: number
    tipo: number
    cantidad: number
    referencia: number
    fecha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Stock_movimientoAvgAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
  }

  export type Stock_movimientoSumAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
  }

  export type Stock_movimientoMinAggregateInputType = {
    id?: true
    variante_id?: true
    tipo?: true
    cantidad?: true
    referencia?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Stock_movimientoMaxAggregateInputType = {
    id?: true
    variante_id?: true
    tipo?: true
    cantidad?: true
    referencia?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Stock_movimientoCountAggregateInputType = {
    id?: true
    variante_id?: true
    tipo?: true
    cantidad?: true
    referencia?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Stock_movimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_movimiento to aggregate.
     */
    where?: stock_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movimientos to fetch.
     */
    orderBy?: stock_movimientoOrderByWithRelationInput | stock_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_movimientos
    **/
    _count?: true | Stock_movimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_movimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_movimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_movimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_movimientoMaxAggregateInputType
  }

  export type GetStock_movimientoAggregateType<T extends Stock_movimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_movimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_movimiento[P]>
      : GetScalarType<T[P], AggregateStock_movimiento[P]>
  }




  export type stock_movimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_movimientoWhereInput
    orderBy?: stock_movimientoOrderByWithAggregationInput | stock_movimientoOrderByWithAggregationInput[]
    by: Stock_movimientoScalarFieldEnum[] | Stock_movimientoScalarFieldEnum
    having?: stock_movimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_movimientoCountAggregateInputType | true
    _avg?: Stock_movimientoAvgAggregateInputType
    _sum?: Stock_movimientoSumAggregateInputType
    _min?: Stock_movimientoMinAggregateInputType
    _max?: Stock_movimientoMaxAggregateInputType
  }

  export type Stock_movimientoGroupByOutputType = {
    id: number
    variante_id: number
    tipo: string
    cantidad: number
    referencia: string | null
    fecha: Date
    createdAt: Date
    updatedAt: Date
    _count: Stock_movimientoCountAggregateOutputType | null
    _avg: Stock_movimientoAvgAggregateOutputType | null
    _sum: Stock_movimientoSumAggregateOutputType | null
    _min: Stock_movimientoMinAggregateOutputType | null
    _max: Stock_movimientoMaxAggregateOutputType | null
  }

  type GetStock_movimientoGroupByPayload<T extends stock_movimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_movimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_movimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_movimientoGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_movimientoGroupByOutputType[P]>
        }
      >
    >


  export type stock_movimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variante_id?: boolean
    tipo?: boolean
    cantidad?: boolean
    referencia?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stock_movimiento"]>

  export type stock_movimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variante_id?: boolean
    tipo?: boolean
    cantidad?: boolean
    referencia?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stock_movimiento"]>

  export type stock_movimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variante_id?: boolean
    tipo?: boolean
    cantidad?: boolean
    referencia?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stock_movimiento"]>

  export type stock_movimientoSelectScalar = {
    id?: boolean
    variante_id?: boolean
    tipo?: boolean
    cantidad?: boolean
    referencia?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type stock_movimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variante_id" | "tipo" | "cantidad" | "referencia" | "fecha" | "createdAt" | "updatedAt", ExtArgs["result"]["stock_movimiento"]>

  export type $stock_movimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_movimiento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      variante_id: number
      tipo: string
      cantidad: number
      referencia: string | null
      fecha: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stock_movimiento"]>
    composites: {}
  }

  type stock_movimientoGetPayload<S extends boolean | null | undefined | stock_movimientoDefaultArgs> = $Result.GetResult<Prisma.$stock_movimientoPayload, S>

  type stock_movimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_movimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_movimientoCountAggregateInputType | true
    }

  export interface stock_movimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_movimiento'], meta: { name: 'stock_movimiento' } }
    /**
     * Find zero or one Stock_movimiento that matches the filter.
     * @param {stock_movimientoFindUniqueArgs} args - Arguments to find a Stock_movimiento
     * @example
     * // Get one Stock_movimiento
     * const stock_movimiento = await prisma.stock_movimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_movimientoFindUniqueArgs>(args: SelectSubset<T, stock_movimientoFindUniqueArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_movimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_movimientoFindUniqueOrThrowArgs} args - Arguments to find a Stock_movimiento
     * @example
     * // Get one Stock_movimiento
     * const stock_movimiento = await prisma.stock_movimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_movimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_movimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_movimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movimientoFindFirstArgs} args - Arguments to find a Stock_movimiento
     * @example
     * // Get one Stock_movimiento
     * const stock_movimiento = await prisma.stock_movimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_movimientoFindFirstArgs>(args?: SelectSubset<T, stock_movimientoFindFirstArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_movimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movimientoFindFirstOrThrowArgs} args - Arguments to find a Stock_movimiento
     * @example
     * // Get one Stock_movimiento
     * const stock_movimiento = await prisma.stock_movimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_movimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_movimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_movimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_movimientos
     * const stock_movimientos = await prisma.stock_movimiento.findMany()
     * 
     * // Get first 10 Stock_movimientos
     * const stock_movimientos = await prisma.stock_movimiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_movimientoWithIdOnly = await prisma.stock_movimiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_movimientoFindManyArgs>(args?: SelectSubset<T, stock_movimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_movimiento.
     * @param {stock_movimientoCreateArgs} args - Arguments to create a Stock_movimiento.
     * @example
     * // Create one Stock_movimiento
     * const Stock_movimiento = await prisma.stock_movimiento.create({
     *   data: {
     *     // ... data to create a Stock_movimiento
     *   }
     * })
     * 
     */
    create<T extends stock_movimientoCreateArgs>(args: SelectSubset<T, stock_movimientoCreateArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_movimientos.
     * @param {stock_movimientoCreateManyArgs} args - Arguments to create many Stock_movimientos.
     * @example
     * // Create many Stock_movimientos
     * const stock_movimiento = await prisma.stock_movimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_movimientoCreateManyArgs>(args?: SelectSubset<T, stock_movimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_movimientos and returns the data saved in the database.
     * @param {stock_movimientoCreateManyAndReturnArgs} args - Arguments to create many Stock_movimientos.
     * @example
     * // Create many Stock_movimientos
     * const stock_movimiento = await prisma.stock_movimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_movimientos and only return the `id`
     * const stock_movimientoWithIdOnly = await prisma.stock_movimiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_movimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_movimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_movimiento.
     * @param {stock_movimientoDeleteArgs} args - Arguments to delete one Stock_movimiento.
     * @example
     * // Delete one Stock_movimiento
     * const Stock_movimiento = await prisma.stock_movimiento.delete({
     *   where: {
     *     // ... filter to delete one Stock_movimiento
     *   }
     * })
     * 
     */
    delete<T extends stock_movimientoDeleteArgs>(args: SelectSubset<T, stock_movimientoDeleteArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_movimiento.
     * @param {stock_movimientoUpdateArgs} args - Arguments to update one Stock_movimiento.
     * @example
     * // Update one Stock_movimiento
     * const stock_movimiento = await prisma.stock_movimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_movimientoUpdateArgs>(args: SelectSubset<T, stock_movimientoUpdateArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_movimientos.
     * @param {stock_movimientoDeleteManyArgs} args - Arguments to filter Stock_movimientos to delete.
     * @example
     * // Delete a few Stock_movimientos
     * const { count } = await prisma.stock_movimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_movimientoDeleteManyArgs>(args?: SelectSubset<T, stock_movimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_movimientos
     * const stock_movimiento = await prisma.stock_movimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_movimientoUpdateManyArgs>(args: SelectSubset<T, stock_movimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_movimientos and returns the data updated in the database.
     * @param {stock_movimientoUpdateManyAndReturnArgs} args - Arguments to update many Stock_movimientos.
     * @example
     * // Update many Stock_movimientos
     * const stock_movimiento = await prisma.stock_movimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_movimientos and only return the `id`
     * const stock_movimientoWithIdOnly = await prisma.stock_movimiento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stock_movimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_movimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_movimiento.
     * @param {stock_movimientoUpsertArgs} args - Arguments to update or create a Stock_movimiento.
     * @example
     * // Update or create a Stock_movimiento
     * const stock_movimiento = await prisma.stock_movimiento.upsert({
     *   create: {
     *     // ... data to create a Stock_movimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_movimiento we want to update
     *   }
     * })
     */
    upsert<T extends stock_movimientoUpsertArgs>(args: SelectSubset<T, stock_movimientoUpsertArgs<ExtArgs>>): Prisma__stock_movimientoClient<$Result.GetResult<Prisma.$stock_movimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_movimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movimientoCountArgs} args - Arguments to filter Stock_movimientos to count.
     * @example
     * // Count the number of Stock_movimientos
     * const count = await prisma.stock_movimiento.count({
     *   where: {
     *     // ... the filter for the Stock_movimientos we want to count
     *   }
     * })
    **/
    count<T extends stock_movimientoCountArgs>(
      args?: Subset<T, stock_movimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_movimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_movimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stock_movimientoAggregateArgs>(args: Subset<T, Stock_movimientoAggregateArgs>): Prisma.PrismaPromise<GetStock_movimientoAggregateType<T>>

    /**
     * Group by Stock_movimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_movimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stock_movimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_movimientoGroupByArgs['orderBy'] }
        : { orderBy?: stock_movimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stock_movimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_movimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_movimiento model
   */
  readonly fields: stock_movimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_movimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_movimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock_movimiento model
   */
  interface stock_movimientoFieldRefs {
    readonly id: FieldRef<"stock_movimiento", 'Int'>
    readonly variante_id: FieldRef<"stock_movimiento", 'Int'>
    readonly tipo: FieldRef<"stock_movimiento", 'String'>
    readonly cantidad: FieldRef<"stock_movimiento", 'Int'>
    readonly referencia: FieldRef<"stock_movimiento", 'String'>
    readonly fecha: FieldRef<"stock_movimiento", 'DateTime'>
    readonly createdAt: FieldRef<"stock_movimiento", 'DateTime'>
    readonly updatedAt: FieldRef<"stock_movimiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stock_movimiento findUnique
   */
  export type stock_movimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * Filter, which stock_movimiento to fetch.
     */
    where: stock_movimientoWhereUniqueInput
  }

  /**
   * stock_movimiento findUniqueOrThrow
   */
  export type stock_movimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * Filter, which stock_movimiento to fetch.
     */
    where: stock_movimientoWhereUniqueInput
  }

  /**
   * stock_movimiento findFirst
   */
  export type stock_movimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * Filter, which stock_movimiento to fetch.
     */
    where?: stock_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movimientos to fetch.
     */
    orderBy?: stock_movimientoOrderByWithRelationInput | stock_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_movimientos.
     */
    cursor?: stock_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_movimientos.
     */
    distinct?: Stock_movimientoScalarFieldEnum | Stock_movimientoScalarFieldEnum[]
  }

  /**
   * stock_movimiento findFirstOrThrow
   */
  export type stock_movimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * Filter, which stock_movimiento to fetch.
     */
    where?: stock_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movimientos to fetch.
     */
    orderBy?: stock_movimientoOrderByWithRelationInput | stock_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_movimientos.
     */
    cursor?: stock_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_movimientos.
     */
    distinct?: Stock_movimientoScalarFieldEnum | Stock_movimientoScalarFieldEnum[]
  }

  /**
   * stock_movimiento findMany
   */
  export type stock_movimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * Filter, which stock_movimientos to fetch.
     */
    where?: stock_movimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_movimientos to fetch.
     */
    orderBy?: stock_movimientoOrderByWithRelationInput | stock_movimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_movimientos.
     */
    cursor?: stock_movimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_movimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_movimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_movimientos.
     */
    distinct?: Stock_movimientoScalarFieldEnum | Stock_movimientoScalarFieldEnum[]
  }

  /**
   * stock_movimiento create
   */
  export type stock_movimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * The data needed to create a stock_movimiento.
     */
    data: XOR<stock_movimientoCreateInput, stock_movimientoUncheckedCreateInput>
  }

  /**
   * stock_movimiento createMany
   */
  export type stock_movimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_movimientos.
     */
    data: stock_movimientoCreateManyInput | stock_movimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_movimiento createManyAndReturn
   */
  export type stock_movimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * The data used to create many stock_movimientos.
     */
    data: stock_movimientoCreateManyInput | stock_movimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_movimiento update
   */
  export type stock_movimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * The data needed to update a stock_movimiento.
     */
    data: XOR<stock_movimientoUpdateInput, stock_movimientoUncheckedUpdateInput>
    /**
     * Choose, which stock_movimiento to update.
     */
    where: stock_movimientoWhereUniqueInput
  }

  /**
   * stock_movimiento updateMany
   */
  export type stock_movimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_movimientos.
     */
    data: XOR<stock_movimientoUpdateManyMutationInput, stock_movimientoUncheckedUpdateManyInput>
    /**
     * Filter which stock_movimientos to update
     */
    where?: stock_movimientoWhereInput
    /**
     * Limit how many stock_movimientos to update.
     */
    limit?: number
  }

  /**
   * stock_movimiento updateManyAndReturn
   */
  export type stock_movimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * The data used to update stock_movimientos.
     */
    data: XOR<stock_movimientoUpdateManyMutationInput, stock_movimientoUncheckedUpdateManyInput>
    /**
     * Filter which stock_movimientos to update
     */
    where?: stock_movimientoWhereInput
    /**
     * Limit how many stock_movimientos to update.
     */
    limit?: number
  }

  /**
   * stock_movimiento upsert
   */
  export type stock_movimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * The filter to search for the stock_movimiento to update in case it exists.
     */
    where: stock_movimientoWhereUniqueInput
    /**
     * In case the stock_movimiento found by the `where` argument doesn't exist, create a new stock_movimiento with this data.
     */
    create: XOR<stock_movimientoCreateInput, stock_movimientoUncheckedCreateInput>
    /**
     * In case the stock_movimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_movimientoUpdateInput, stock_movimientoUncheckedUpdateInput>
  }

  /**
   * stock_movimiento delete
   */
  export type stock_movimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
    /**
     * Filter which stock_movimiento to delete.
     */
    where: stock_movimientoWhereUniqueInput
  }

  /**
   * stock_movimiento deleteMany
   */
  export type stock_movimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_movimientos to delete
     */
    where?: stock_movimientoWhereInput
    /**
     * Limit how many stock_movimientos to delete.
     */
    limit?: number
  }

  /**
   * stock_movimiento without action
   */
  export type stock_movimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_movimiento
     */
    select?: stock_movimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_movimiento
     */
    omit?: stock_movimientoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono',
    dni: 'dni',
    direccion: 'direccion',
    localidad: 'localidad',
    observacion: 'observacion',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const MarcaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type MarcaScalarFieldEnum = (typeof MarcaScalarFieldEnum)[keyof typeof MarcaScalarFieldEnum]


  export const ProvedorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ProvedorScalarFieldEnum = (typeof ProvedorScalarFieldEnum)[keyof typeof ProvedorScalarFieldEnum]


  export const TalleScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type TalleScalarFieldEnum = (typeof TalleScalarFieldEnum)[keyof typeof TalleScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ColorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion',
    provedor_id: 'provedor_id',
    marca_id: 'marca_id',
    categoria_id: 'categoria_id',
    sku: 'sku',
    img_url: 'img_url',
    observacion: 'observacion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    activo: 'activo'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const Variante_productoScalarFieldEnum: {
    id: 'id',
    producto_id: 'producto_id',
    talle_id: 'talle_id',
    color_id: 'color_id',
    precio: 'precio',
    stock: 'stock',
    sku: 'sku',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Variante_productoScalarFieldEnum = (typeof Variante_productoScalarFieldEnum)[keyof typeof Variante_productoScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    cliente_id: 'cliente_id',
    fecha: 'fecha',
    total: 'total',
    observacion: 'observacion',
    numero_venta: 'numero_venta',
    tipo_pago: 'tipo_pago',
    tipo_venta: 'tipo_venta',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const Detalle_ventaScalarFieldEnum: {
    id: 'id',
    venta_id: 'venta_id',
    variante_id: 'variante_id',
    cantidad: 'cantidad',
    precio: 'precio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Detalle_ventaScalarFieldEnum = (typeof Detalle_ventaScalarFieldEnum)[keyof typeof Detalle_ventaScalarFieldEnum]


  export const Stock_movimientoScalarFieldEnum: {
    id: 'id',
    variante_id: 'variante_id',
    tipo: 'tipo',
    cantidad: 'cantidad',
    referencia: 'referencia',
    fecha: 'fecha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Stock_movimientoScalarFieldEnum = (typeof Stock_movimientoScalarFieldEnum)[keyof typeof Stock_movimientoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    dni?: StringNullableFilter<"Cliente"> | string | null
    direccion?: StringNullableFilter<"Cliente"> | string | null
    localidad?: StringNullableFilter<"Cliente"> | string | null
    observacion?: StringNullableFilter<"Cliente"> | string | null
    activo?: BoolFilter<"Cliente"> | boolean
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    localidad?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    dni?: StringNullableFilter<"Cliente"> | string | null
    direccion?: StringNullableFilter<"Cliente"> | string | null
    localidad?: StringNullableFilter<"Cliente"> | string | null
    observacion?: StringNullableFilter<"Cliente"> | string | null
    activo?: BoolFilter<"Cliente"> | boolean
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    localidad?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    dni?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    localidad?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    observacion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    activo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type MarcaWhereInput = {
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    id?: IntFilter<"Marca"> | number
    nombre?: StringFilter<"Marca"> | string
  }

  export type MarcaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MarcaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
  }, "id" | "nombre">

  export type MarcaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: MarcaCountOrderByAggregateInput
    _avg?: MarcaAvgOrderByAggregateInput
    _max?: MarcaMaxOrderByAggregateInput
    _min?: MarcaMinOrderByAggregateInput
    _sum?: MarcaSumOrderByAggregateInput
  }

  export type MarcaScalarWhereWithAggregatesInput = {
    AND?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    OR?: MarcaScalarWhereWithAggregatesInput[]
    NOT?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Marca"> | number
    nombre?: StringWithAggregatesFilter<"Marca"> | string
  }

  export type ProvedorWhereInput = {
    AND?: ProvedorWhereInput | ProvedorWhereInput[]
    OR?: ProvedorWhereInput[]
    NOT?: ProvedorWhereInput | ProvedorWhereInput[]
    id?: IntFilter<"Provedor"> | number
    nombre?: StringFilter<"Provedor"> | string
  }

  export type ProvedorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ProvedorWhereInput | ProvedorWhereInput[]
    OR?: ProvedorWhereInput[]
    NOT?: ProvedorWhereInput | ProvedorWhereInput[]
  }, "id" | "nombre">

  export type ProvedorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ProvedorCountOrderByAggregateInput
    _avg?: ProvedorAvgOrderByAggregateInput
    _max?: ProvedorMaxOrderByAggregateInput
    _min?: ProvedorMinOrderByAggregateInput
    _sum?: ProvedorSumOrderByAggregateInput
  }

  export type ProvedorScalarWhereWithAggregatesInput = {
    AND?: ProvedorScalarWhereWithAggregatesInput | ProvedorScalarWhereWithAggregatesInput[]
    OR?: ProvedorScalarWhereWithAggregatesInput[]
    NOT?: ProvedorScalarWhereWithAggregatesInput | ProvedorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provedor"> | number
    nombre?: StringWithAggregatesFilter<"Provedor"> | string
  }

  export type TalleWhereInput = {
    AND?: TalleWhereInput | TalleWhereInput[]
    OR?: TalleWhereInput[]
    NOT?: TalleWhereInput | TalleWhereInput[]
    id?: IntFilter<"Talle"> | number
    nombre?: StringFilter<"Talle"> | string
  }

  export type TalleOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TalleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: TalleWhereInput | TalleWhereInput[]
    OR?: TalleWhereInput[]
    NOT?: TalleWhereInput | TalleWhereInput[]
  }, "id" | "nombre">

  export type TalleOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: TalleCountOrderByAggregateInput
    _avg?: TalleAvgOrderByAggregateInput
    _max?: TalleMaxOrderByAggregateInput
    _min?: TalleMinOrderByAggregateInput
    _sum?: TalleSumOrderByAggregateInput
  }

  export type TalleScalarWhereWithAggregatesInput = {
    AND?: TalleScalarWhereWithAggregatesInput | TalleScalarWhereWithAggregatesInput[]
    OR?: TalleScalarWhereWithAggregatesInput[]
    NOT?: TalleScalarWhereWithAggregatesInput | TalleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Talle"> | number
    nombre?: StringWithAggregatesFilter<"Talle"> | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type ColorWhereInput = {
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    id?: IntFilter<"Color"> | number
    nombre?: StringFilter<"Color"> | string
  }

  export type ColorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
  }, "id" | "nombre">

  export type ColorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ColorCountOrderByAggregateInput
    _avg?: ColorAvgOrderByAggregateInput
    _max?: ColorMaxOrderByAggregateInput
    _min?: ColorMinOrderByAggregateInput
    _sum?: ColorSumOrderByAggregateInput
  }

  export type ColorScalarWhereWithAggregatesInput = {
    AND?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    OR?: ColorScalarWhereWithAggregatesInput[]
    NOT?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Color"> | number
    nombre?: StringWithAggregatesFilter<"Color"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    descripcion?: StringFilter<"Producto"> | string
    provedor_id?: IntNullableFilter<"Producto"> | number | null
    marca_id?: IntNullableFilter<"Producto"> | number | null
    categoria_id?: IntNullableFilter<"Producto"> | number | null
    sku?: StringNullableFilter<"Producto"> | string | null
    img_url?: StringNullableFilter<"Producto"> | string | null
    observacion?: StringNullableFilter<"Producto"> | string | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    activo?: BoolFilter<"Producto"> | boolean
    variantes?: Variante_productoListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    provedor_id?: SortOrderInput | SortOrder
    marca_id?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activo?: SortOrder
    variantes?: variante_productoOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    descripcion?: StringFilter<"Producto"> | string
    provedor_id?: IntNullableFilter<"Producto"> | number | null
    marca_id?: IntNullableFilter<"Producto"> | number | null
    categoria_id?: IntNullableFilter<"Producto"> | number | null
    sku?: StringNullableFilter<"Producto"> | string | null
    img_url?: StringNullableFilter<"Producto"> | string | null
    observacion?: StringNullableFilter<"Producto"> | string | null
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    activo?: BoolFilter<"Producto"> | boolean
    variantes?: Variante_productoListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    provedor_id?: SortOrderInput | SortOrder
    marca_id?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activo?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    provedor_id?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    marca_id?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    categoria_id?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    sku?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    img_url?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    observacion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    activo?: BoolWithAggregatesFilter<"Producto"> | boolean
  }

  export type variante_productoWhereInput = {
    AND?: variante_productoWhereInput | variante_productoWhereInput[]
    OR?: variante_productoWhereInput[]
    NOT?: variante_productoWhereInput | variante_productoWhereInput[]
    id?: IntFilter<"variante_producto"> | number
    producto_id?: IntFilter<"variante_producto"> | number
    talle_id?: IntFilter<"variante_producto"> | number
    color_id?: IntFilter<"variante_producto"> | number
    precio?: FloatFilter<"variante_producto"> | number
    stock?: IntFilter<"variante_producto"> | number
    sku?: StringNullableFilter<"variante_producto"> | string | null
    activo?: BoolFilter<"variante_producto"> | boolean
    createdAt?: DateTimeFilter<"variante_producto"> | Date | string
    updatedAt?: DateTimeFilter<"variante_producto"> | Date | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type variante_productoOrderByWithRelationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    sku?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    producto?: ProductoOrderByWithRelationInput
  }

  export type variante_productoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: variante_productoWhereInput | variante_productoWhereInput[]
    OR?: variante_productoWhereInput[]
    NOT?: variante_productoWhereInput | variante_productoWhereInput[]
    producto_id?: IntFilter<"variante_producto"> | number
    talle_id?: IntFilter<"variante_producto"> | number
    color_id?: IntFilter<"variante_producto"> | number
    precio?: FloatFilter<"variante_producto"> | number
    stock?: IntFilter<"variante_producto"> | number
    sku?: StringNullableFilter<"variante_producto"> | string | null
    activo?: BoolFilter<"variante_producto"> | boolean
    createdAt?: DateTimeFilter<"variante_producto"> | Date | string
    updatedAt?: DateTimeFilter<"variante_producto"> | Date | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type variante_productoOrderByWithAggregationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    sku?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: variante_productoCountOrderByAggregateInput
    _avg?: variante_productoAvgOrderByAggregateInput
    _max?: variante_productoMaxOrderByAggregateInput
    _min?: variante_productoMinOrderByAggregateInput
    _sum?: variante_productoSumOrderByAggregateInput
  }

  export type variante_productoScalarWhereWithAggregatesInput = {
    AND?: variante_productoScalarWhereWithAggregatesInput | variante_productoScalarWhereWithAggregatesInput[]
    OR?: variante_productoScalarWhereWithAggregatesInput[]
    NOT?: variante_productoScalarWhereWithAggregatesInput | variante_productoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"variante_producto"> | number
    producto_id?: IntWithAggregatesFilter<"variante_producto"> | number
    talle_id?: IntWithAggregatesFilter<"variante_producto"> | number
    color_id?: IntWithAggregatesFilter<"variante_producto"> | number
    precio?: FloatWithAggregatesFilter<"variante_producto"> | number
    stock?: IntWithAggregatesFilter<"variante_producto"> | number
    sku?: StringNullableWithAggregatesFilter<"variante_producto"> | string | null
    activo?: BoolWithAggregatesFilter<"variante_producto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"variante_producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"variante_producto"> | Date | string
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    cliente_id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    total?: FloatFilter<"Venta"> | number
    observacion?: StringNullableFilter<"Venta"> | string | null
    numero_venta?: StringFilter<"Venta"> | string
    tipo_pago?: StringFilter<"Venta"> | string
    tipo_venta?: StringFilter<"Venta"> | string
    createdAt?: DateTimeFilter<"Venta"> | Date | string
    updatedAt?: DateTimeFilter<"Venta"> | Date | string
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    observacion?: SortOrderInput | SortOrder
    numero_venta?: SortOrder
    tipo_pago?: SortOrder
    tipo_venta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero_venta?: string
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    cliente_id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    total?: FloatFilter<"Venta"> | number
    observacion?: StringNullableFilter<"Venta"> | string | null
    tipo_pago?: StringFilter<"Venta"> | string
    tipo_venta?: StringFilter<"Venta"> | string
    createdAt?: DateTimeFilter<"Venta"> | Date | string
    updatedAt?: DateTimeFilter<"Venta"> | Date | string
  }, "id" | "numero_venta">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    observacion?: SortOrderInput | SortOrder
    numero_venta?: SortOrder
    tipo_pago?: SortOrder
    tipo_venta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    cliente_id?: IntWithAggregatesFilter<"Venta"> | number
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    total?: FloatWithAggregatesFilter<"Venta"> | number
    observacion?: StringNullableWithAggregatesFilter<"Venta"> | string | null
    numero_venta?: StringWithAggregatesFilter<"Venta"> | string
    tipo_pago?: StringWithAggregatesFilter<"Venta"> | string
    tipo_venta?: StringWithAggregatesFilter<"Venta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
  }

  export type detalle_ventaWhereInput = {
    AND?: detalle_ventaWhereInput | detalle_ventaWhereInput[]
    OR?: detalle_ventaWhereInput[]
    NOT?: detalle_ventaWhereInput | detalle_ventaWhereInput[]
    id?: IntFilter<"detalle_venta"> | number
    venta_id?: IntFilter<"detalle_venta"> | number
    variante_id?: IntFilter<"detalle_venta"> | number
    cantidad?: IntFilter<"detalle_venta"> | number
    precio?: FloatFilter<"detalle_venta"> | number
    createdAt?: DateTimeFilter<"detalle_venta"> | Date | string
    updatedAt?: DateTimeFilter<"detalle_venta"> | Date | string
  }

  export type detalle_ventaOrderByWithRelationInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detalle_ventaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detalle_ventaWhereInput | detalle_ventaWhereInput[]
    OR?: detalle_ventaWhereInput[]
    NOT?: detalle_ventaWhereInput | detalle_ventaWhereInput[]
    venta_id?: IntFilter<"detalle_venta"> | number
    variante_id?: IntFilter<"detalle_venta"> | number
    cantidad?: IntFilter<"detalle_venta"> | number
    precio?: FloatFilter<"detalle_venta"> | number
    createdAt?: DateTimeFilter<"detalle_venta"> | Date | string
    updatedAt?: DateTimeFilter<"detalle_venta"> | Date | string
  }, "id">

  export type detalle_ventaOrderByWithAggregationInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: detalle_ventaCountOrderByAggregateInput
    _avg?: detalle_ventaAvgOrderByAggregateInput
    _max?: detalle_ventaMaxOrderByAggregateInput
    _min?: detalle_ventaMinOrderByAggregateInput
    _sum?: detalle_ventaSumOrderByAggregateInput
  }

  export type detalle_ventaScalarWhereWithAggregatesInput = {
    AND?: detalle_ventaScalarWhereWithAggregatesInput | detalle_ventaScalarWhereWithAggregatesInput[]
    OR?: detalle_ventaScalarWhereWithAggregatesInput[]
    NOT?: detalle_ventaScalarWhereWithAggregatesInput | detalle_ventaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detalle_venta"> | number
    venta_id?: IntWithAggregatesFilter<"detalle_venta"> | number
    variante_id?: IntWithAggregatesFilter<"detalle_venta"> | number
    cantidad?: IntWithAggregatesFilter<"detalle_venta"> | number
    precio?: FloatWithAggregatesFilter<"detalle_venta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"detalle_venta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"detalle_venta"> | Date | string
  }

  export type stock_movimientoWhereInput = {
    AND?: stock_movimientoWhereInput | stock_movimientoWhereInput[]
    OR?: stock_movimientoWhereInput[]
    NOT?: stock_movimientoWhereInput | stock_movimientoWhereInput[]
    id?: IntFilter<"stock_movimiento"> | number
    variante_id?: IntFilter<"stock_movimiento"> | number
    tipo?: StringFilter<"stock_movimiento"> | string
    cantidad?: IntFilter<"stock_movimiento"> | number
    referencia?: StringNullableFilter<"stock_movimiento"> | string | null
    fecha?: DateTimeFilter<"stock_movimiento"> | Date | string
    createdAt?: DateTimeFilter<"stock_movimiento"> | Date | string
    updatedAt?: DateTimeFilter<"stock_movimiento"> | Date | string
  }

  export type stock_movimientoOrderByWithRelationInput = {
    id?: SortOrder
    variante_id?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    referencia?: SortOrderInput | SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stock_movimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stock_movimientoWhereInput | stock_movimientoWhereInput[]
    OR?: stock_movimientoWhereInput[]
    NOT?: stock_movimientoWhereInput | stock_movimientoWhereInput[]
    variante_id?: IntFilter<"stock_movimiento"> | number
    tipo?: StringFilter<"stock_movimiento"> | string
    cantidad?: IntFilter<"stock_movimiento"> | number
    referencia?: StringNullableFilter<"stock_movimiento"> | string | null
    fecha?: DateTimeFilter<"stock_movimiento"> | Date | string
    createdAt?: DateTimeFilter<"stock_movimiento"> | Date | string
    updatedAt?: DateTimeFilter<"stock_movimiento"> | Date | string
  }, "id">

  export type stock_movimientoOrderByWithAggregationInput = {
    id?: SortOrder
    variante_id?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    referencia?: SortOrderInput | SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: stock_movimientoCountOrderByAggregateInput
    _avg?: stock_movimientoAvgOrderByAggregateInput
    _max?: stock_movimientoMaxOrderByAggregateInput
    _min?: stock_movimientoMinOrderByAggregateInput
    _sum?: stock_movimientoSumOrderByAggregateInput
  }

  export type stock_movimientoScalarWhereWithAggregatesInput = {
    AND?: stock_movimientoScalarWhereWithAggregatesInput | stock_movimientoScalarWhereWithAggregatesInput[]
    OR?: stock_movimientoScalarWhereWithAggregatesInput[]
    NOT?: stock_movimientoScalarWhereWithAggregatesInput | stock_movimientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock_movimiento"> | number
    variante_id?: IntWithAggregatesFilter<"stock_movimiento"> | number
    tipo?: StringWithAggregatesFilter<"stock_movimiento"> | string
    cantidad?: IntWithAggregatesFilter<"stock_movimiento"> | number
    referencia?: StringNullableWithAggregatesFilter<"stock_movimiento"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"stock_movimiento"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"stock_movimiento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"stock_movimiento"> | Date | string
  }

  export type ClienteCreateInput = {
    nombre: string
    telefono?: string | null
    dni?: string | null
    direccion?: string | null
    localidad?: string | null
    observacion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    telefono?: string | null
    dni?: string | null
    direccion?: string | null
    localidad?: string | null
    observacion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    telefono?: string | null
    dni?: string | null
    direccion?: string | null
    localidad?: string | null
    observacion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcaCreateInput = {
    nombre: string
  }

  export type MarcaUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type MarcaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type MarcaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvedorCreateInput = {
    nombre: string
  }

  export type ProvedorUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type ProvedorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvedorCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ProvedorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TalleCreateInput = {
    nombre: string
  }

  export type TalleUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type TalleUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TalleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TalleCreateManyInput = {
    id?: number
    nombre: string
  }

  export type TalleUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TalleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ColorCreateInput = {
    nombre: string
  }

  export type ColorUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type ColorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ColorCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ColorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    descripcion: string
    provedor_id?: number | null
    marca_id?: number | null
    categoria_id?: number | null
    sku?: string | null
    img_url?: string | null
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activo?: boolean
    variantes?: variante_productoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    descripcion: string
    provedor_id?: number | null
    marca_id?: number | null
    categoria_id?: number | null
    sku?: string | null
    img_url?: string | null
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activo?: boolean
    variantes?: variante_productoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    provedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    marca_id?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    variantes?: variante_productoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    provedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    marca_id?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    variantes?: variante_productoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    descripcion: string
    provedor_id?: number | null
    marca_id?: number | null
    categoria_id?: number | null
    sku?: string | null
    img_url?: string | null
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activo?: boolean
  }

  export type ProductoUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    provedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    marca_id?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    provedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    marca_id?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type variante_productoCreateInput = {
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutVariantesInput
  }

  export type variante_productoUncheckedCreateInput = {
    id?: number
    producto_id: number
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type variante_productoUpdateInput = {
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutVariantesNestedInput
  }

  export type variante_productoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variante_productoCreateManyInput = {
    id?: number
    producto_id: number
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type variante_productoUpdateManyMutationInput = {
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variante_productoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateInput = {
    cliente_id: number
    fecha?: Date | string
    total: number
    observacion?: string | null
    numero_venta: string
    tipo_pago: string
    tipo_venta: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    cliente_id: number
    fecha?: Date | string
    total: number
    observacion?: string | null
    numero_venta: string
    tipo_pago: string
    tipo_venta: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VentaUpdateInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    numero_venta?: StringFieldUpdateOperationsInput | string
    tipo_pago?: StringFieldUpdateOperationsInput | string
    tipo_venta?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    numero_venta?: StringFieldUpdateOperationsInput | string
    tipo_pago?: StringFieldUpdateOperationsInput | string
    tipo_venta?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateManyInput = {
    id?: number
    cliente_id: number
    fecha?: Date | string
    total: number
    observacion?: string | null
    numero_venta: string
    tipo_pago: string
    tipo_venta: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VentaUpdateManyMutationInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    numero_venta?: StringFieldUpdateOperationsInput | string
    tipo_pago?: StringFieldUpdateOperationsInput | string
    tipo_venta?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    numero_venta?: StringFieldUpdateOperationsInput | string
    tipo_pago?: StringFieldUpdateOperationsInput | string
    tipo_venta?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detalle_ventaCreateInput = {
    venta_id: number
    variante_id: number
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detalle_ventaUncheckedCreateInput = {
    id?: number
    venta_id: number
    variante_id: number
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detalle_ventaUpdateInput = {
    venta_id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detalle_ventaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venta_id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detalle_ventaCreateManyInput = {
    id?: number
    venta_id: number
    variante_id: number
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detalle_ventaUpdateManyMutationInput = {
    venta_id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detalle_ventaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venta_id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_movimientoCreateInput = {
    variante_id: number
    tipo: string
    cantidad: number
    referencia?: string | null
    fecha?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type stock_movimientoUncheckedCreateInput = {
    id?: number
    variante_id: number
    tipo: string
    cantidad: number
    referencia?: string | null
    fecha?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type stock_movimientoUpdateInput = {
    variante_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_movimientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_movimientoCreateManyInput = {
    id?: number
    variante_id: number
    tipo: string
    cantidad: number
    referencia?: string | null
    fecha?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type stock_movimientoUpdateManyMutationInput = {
    variante_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_movimientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    dni?: SortOrder
    direccion?: SortOrder
    localidad?: SortOrder
    observacion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    dni?: SortOrder
    direccion?: SortOrder
    localidad?: SortOrder
    observacion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    dni?: SortOrder
    direccion?: SortOrder
    localidad?: SortOrder
    observacion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MarcaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MarcaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarcaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MarcaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MarcaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvedorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvedorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvedorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvedorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TalleCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TalleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TalleMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TalleMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TalleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ColorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ColorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ColorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Variante_productoListRelationFilter = {
    every?: variante_productoWhereInput
    some?: variante_productoWhereInput
    none?: variante_productoWhereInput
  }

  export type variante_productoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    provedor_id?: SortOrder
    marca_id?: SortOrder
    categoria_id?: SortOrder
    sku?: SortOrder
    img_url?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activo?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    provedor_id?: SortOrder
    marca_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    provedor_id?: SortOrder
    marca_id?: SortOrder
    categoria_id?: SortOrder
    sku?: SortOrder
    img_url?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activo?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
    provedor_id?: SortOrder
    marca_id?: SortOrder
    categoria_id?: SortOrder
    sku?: SortOrder
    img_url?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activo?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    provedor_id?: SortOrder
    marca_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type variante_productoCountOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    sku?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type variante_productoAvgOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type variante_productoMaxOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    sku?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type variante_productoMinOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    sku?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type variante_productoSumOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talle_id?: SortOrder
    color_id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    observacion?: SortOrder
    numero_venta?: SortOrder
    tipo_pago?: SortOrder
    tipo_venta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    total?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    observacion?: SortOrder
    numero_venta?: SortOrder
    tipo_pago?: SortOrder
    tipo_venta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    observacion?: SortOrder
    numero_venta?: SortOrder
    tipo_pago?: SortOrder
    tipo_venta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    total?: SortOrder
  }

  export type detalle_ventaCountOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detalle_ventaAvgOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type detalle_ventaMaxOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detalle_ventaMinOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detalle_ventaSumOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type stock_movimientoCountOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    referencia?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stock_movimientoAvgOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
  }

  export type stock_movimientoMaxOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    referencia?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stock_movimientoMinOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    referencia?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type stock_movimientoSumOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type variante_productoCreateNestedManyWithoutProductoInput = {
    create?: XOR<variante_productoCreateWithoutProductoInput, variante_productoUncheckedCreateWithoutProductoInput> | variante_productoCreateWithoutProductoInput[] | variante_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variante_productoCreateOrConnectWithoutProductoInput | variante_productoCreateOrConnectWithoutProductoInput[]
    createMany?: variante_productoCreateManyProductoInputEnvelope
    connect?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
  }

  export type variante_productoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<variante_productoCreateWithoutProductoInput, variante_productoUncheckedCreateWithoutProductoInput> | variante_productoCreateWithoutProductoInput[] | variante_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variante_productoCreateOrConnectWithoutProductoInput | variante_productoCreateOrConnectWithoutProductoInput[]
    createMany?: variante_productoCreateManyProductoInputEnvelope
    connect?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type variante_productoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<variante_productoCreateWithoutProductoInput, variante_productoUncheckedCreateWithoutProductoInput> | variante_productoCreateWithoutProductoInput[] | variante_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variante_productoCreateOrConnectWithoutProductoInput | variante_productoCreateOrConnectWithoutProductoInput[]
    upsert?: variante_productoUpsertWithWhereUniqueWithoutProductoInput | variante_productoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: variante_productoCreateManyProductoInputEnvelope
    set?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    disconnect?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    delete?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    connect?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    update?: variante_productoUpdateWithWhereUniqueWithoutProductoInput | variante_productoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: variante_productoUpdateManyWithWhereWithoutProductoInput | variante_productoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: variante_productoScalarWhereInput | variante_productoScalarWhereInput[]
  }

  export type variante_productoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<variante_productoCreateWithoutProductoInput, variante_productoUncheckedCreateWithoutProductoInput> | variante_productoCreateWithoutProductoInput[] | variante_productoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variante_productoCreateOrConnectWithoutProductoInput | variante_productoCreateOrConnectWithoutProductoInput[]
    upsert?: variante_productoUpsertWithWhereUniqueWithoutProductoInput | variante_productoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: variante_productoCreateManyProductoInputEnvelope
    set?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    disconnect?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    delete?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    connect?: variante_productoWhereUniqueInput | variante_productoWhereUniqueInput[]
    update?: variante_productoUpdateWithWhereUniqueWithoutProductoInput | variante_productoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: variante_productoUpdateManyWithWhereWithoutProductoInput | variante_productoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: variante_productoScalarWhereInput | variante_productoScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutVariantesInput = {
    create?: XOR<ProductoCreateWithoutVariantesInput, ProductoUncheckedCreateWithoutVariantesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutVariantesInput
    connect?: ProductoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoUpdateOneRequiredWithoutVariantesNestedInput = {
    create?: XOR<ProductoCreateWithoutVariantesInput, ProductoUncheckedCreateWithoutVariantesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutVariantesInput
    upsert?: ProductoUpsertWithoutVariantesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutVariantesInput, ProductoUpdateWithoutVariantesInput>, ProductoUncheckedUpdateWithoutVariantesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type variante_productoCreateWithoutProductoInput = {
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type variante_productoUncheckedCreateWithoutProductoInput = {
    id?: number
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type variante_productoCreateOrConnectWithoutProductoInput = {
    where: variante_productoWhereUniqueInput
    create: XOR<variante_productoCreateWithoutProductoInput, variante_productoUncheckedCreateWithoutProductoInput>
  }

  export type variante_productoCreateManyProductoInputEnvelope = {
    data: variante_productoCreateManyProductoInput | variante_productoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type variante_productoUpsertWithWhereUniqueWithoutProductoInput = {
    where: variante_productoWhereUniqueInput
    update: XOR<variante_productoUpdateWithoutProductoInput, variante_productoUncheckedUpdateWithoutProductoInput>
    create: XOR<variante_productoCreateWithoutProductoInput, variante_productoUncheckedCreateWithoutProductoInput>
  }

  export type variante_productoUpdateWithWhereUniqueWithoutProductoInput = {
    where: variante_productoWhereUniqueInput
    data: XOR<variante_productoUpdateWithoutProductoInput, variante_productoUncheckedUpdateWithoutProductoInput>
  }

  export type variante_productoUpdateManyWithWhereWithoutProductoInput = {
    where: variante_productoScalarWhereInput
    data: XOR<variante_productoUpdateManyMutationInput, variante_productoUncheckedUpdateManyWithoutProductoInput>
  }

  export type variante_productoScalarWhereInput = {
    AND?: variante_productoScalarWhereInput | variante_productoScalarWhereInput[]
    OR?: variante_productoScalarWhereInput[]
    NOT?: variante_productoScalarWhereInput | variante_productoScalarWhereInput[]
    id?: IntFilter<"variante_producto"> | number
    producto_id?: IntFilter<"variante_producto"> | number
    talle_id?: IntFilter<"variante_producto"> | number
    color_id?: IntFilter<"variante_producto"> | number
    precio?: FloatFilter<"variante_producto"> | number
    stock?: IntFilter<"variante_producto"> | number
    sku?: StringNullableFilter<"variante_producto"> | string | null
    activo?: BoolFilter<"variante_producto"> | boolean
    createdAt?: DateTimeFilter<"variante_producto"> | Date | string
    updatedAt?: DateTimeFilter<"variante_producto"> | Date | string
  }

  export type ProductoCreateWithoutVariantesInput = {
    descripcion: string
    provedor_id?: number | null
    marca_id?: number | null
    categoria_id?: number | null
    sku?: string | null
    img_url?: string | null
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activo?: boolean
  }

  export type ProductoUncheckedCreateWithoutVariantesInput = {
    id?: number
    descripcion: string
    provedor_id?: number | null
    marca_id?: number | null
    categoria_id?: number | null
    sku?: string | null
    img_url?: string | null
    observacion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activo?: boolean
  }

  export type ProductoCreateOrConnectWithoutVariantesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutVariantesInput, ProductoUncheckedCreateWithoutVariantesInput>
  }

  export type ProductoUpsertWithoutVariantesInput = {
    update: XOR<ProductoUpdateWithoutVariantesInput, ProductoUncheckedUpdateWithoutVariantesInput>
    create: XOR<ProductoCreateWithoutVariantesInput, ProductoUncheckedCreateWithoutVariantesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutVariantesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutVariantesInput, ProductoUncheckedUpdateWithoutVariantesInput>
  }

  export type ProductoUpdateWithoutVariantesInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    provedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    marca_id?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductoUncheckedUpdateWithoutVariantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    provedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    marca_id?: NullableIntFieldUpdateOperationsInput | number | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type variante_productoCreateManyProductoInput = {
    id?: number
    talle_id: number
    color_id: number
    precio: number
    stock: number
    sku?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type variante_productoUpdateWithoutProductoInput = {
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variante_productoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variante_productoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    talle_id?: IntFieldUpdateOperationsInput | number
    color_id?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}