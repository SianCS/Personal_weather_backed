
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model WeatherData
 * 
 */
export type WeatherData = $Result.DefaultSelection<Prisma.$WeatherDataPayload>
/**
 * Model FavoriteLocation
 * 
 */
export type FavoriteLocation = $Result.DefaultSelection<Prisma.$FavoriteLocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weatherData`: Exposes CRUD operations for the **WeatherData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherData
    * const weatherData = await prisma.weatherData.findMany()
    * ```
    */
  get weatherData(): Prisma.WeatherDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteLocation`: Exposes CRUD operations for the **FavoriteLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteLocations
    * const favoriteLocations = await prisma.favoriteLocation.findMany()
    * ```
    */
  get favoriteLocation(): Prisma.FavoriteLocationDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    City: 'City',
    WeatherData: 'WeatherData',
    FavoriteLocation: 'FavoriteLocation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "city" | "weatherData" | "favoriteLocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      WeatherData: {
        payload: Prisma.$WeatherDataPayload<ExtArgs>
        fields: Prisma.WeatherDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          findFirst: {
            args: Prisma.WeatherDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          findMany: {
            args: Prisma.WeatherDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>[]
          }
          create: {
            args: Prisma.WeatherDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          createMany: {
            args: Prisma.WeatherDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WeatherDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          update: {
            args: Prisma.WeatherDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          deleteMany: {
            args: Prisma.WeatherDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeatherDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          aggregate: {
            args: Prisma.WeatherDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherData>
          }
          groupBy: {
            args: Prisma.WeatherDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherDataCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherDataCountAggregateOutputType> | number
          }
        }
      }
      FavoriteLocation: {
        payload: Prisma.$FavoriteLocationPayload<ExtArgs>
        fields: Prisma.FavoriteLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>
          }
          findFirst: {
            args: Prisma.FavoriteLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>
          }
          findMany: {
            args: Prisma.FavoriteLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>[]
          }
          create: {
            args: Prisma.FavoriteLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>
          }
          createMany: {
            args: Prisma.FavoriteLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoriteLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>
          }
          update: {
            args: Prisma.FavoriteLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteLocationPayload>
          }
          aggregate: {
            args: Prisma.FavoriteLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteLocation>
          }
          groupBy: {
            args: Prisma.FavoriteLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteLocationCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteLocationCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    city?: CityOmit
    weatherData?: WeatherDataOmit
    favoriteLocation?: FavoriteLocationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteLocationWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    weatherRecords: number
    favorites: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weatherRecords?: boolean | CityCountOutputTypeCountWeatherRecordsArgs
    favorites?: boolean | CityCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountWeatherRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherDataWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteLocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favorites: Prisma.$FavoriteLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    where?: FavoriteLocationWhereInput
    orderBy?: FavoriteLocationOrderByWithRelationInput | FavoriteLocationOrderByWithRelationInput[]
    cursor?: FavoriteLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteLocationScalarFieldEnum | FavoriteLocationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    cityName: string | null
    locationName: string | null
    latitude: number | null
    longitude: number | null
    updatedAt: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    cityName: string | null
    locationName: string | null
    latitude: number | null
    longitude: number | null
    updatedAt: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    cityName: number
    locationName: number
    latitude: number
    longitude: number
    updatedAt: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    cityName?: true
    locationName?: true
    latitude?: true
    longitude?: true
    updatedAt?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    cityName?: true
    locationName?: true
    latitude?: true
    longitude?: true
    updatedAt?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    cityName?: true
    locationName?: true
    latitude?: true
    longitude?: true
    updatedAt?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt: Date
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityName?: boolean
    locationName?: boolean
    latitude?: boolean
    longitude?: boolean
    updatedAt?: boolean
    weatherRecords?: boolean | City$weatherRecordsArgs<ExtArgs>
    favorites?: boolean | City$favoritesArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>



  export type CitySelectScalar = {
    id?: boolean
    cityName?: boolean
    locationName?: boolean
    latitude?: boolean
    longitude?: boolean
    updatedAt?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cityName" | "locationName" | "latitude" | "longitude" | "updatedAt", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weatherRecords?: boolean | City$weatherRecordsArgs<ExtArgs>
    favorites?: boolean | City$favoritesArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      weatherRecords: Prisma.$WeatherDataPayload<ExtArgs>[]
      favorites: Prisma.$FavoriteLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityName: string
      locationName: string
      latitude: number
      longitude: number
      updatedAt: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weatherRecords<T extends City$weatherRecordsArgs<ExtArgs> = {}>(args?: Subset<T, City$weatherRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends City$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, City$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly cityName: FieldRef<"City", 'String'>
    readonly locationName: FieldRef<"City", 'String'>
    readonly latitude: FieldRef<"City", 'Float'>
    readonly longitude: FieldRef<"City", 'Float'>
    readonly updatedAt: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.weatherRecords
   */
  export type City$weatherRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    where?: WeatherDataWhereInput
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    cursor?: WeatherDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * City.favorites
   */
  export type City$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    where?: FavoriteLocationWhereInput
    orderBy?: FavoriteLocationOrderByWithRelationInput | FavoriteLocationOrderByWithRelationInput[]
    cursor?: FavoriteLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteLocationScalarFieldEnum | FavoriteLocationScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model WeatherData
   */

  export type AggregateWeatherData = {
    _count: WeatherDataCountAggregateOutputType | null
    _avg: WeatherDataAvgAggregateOutputType | null
    _sum: WeatherDataSumAggregateOutputType | null
    _min: WeatherDataMinAggregateOutputType | null
    _max: WeatherDataMaxAggregateOutputType | null
  }

  export type WeatherDataAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
    temperature: number | null
    humidity: number | null
    windSpeed: number | null
  }

  export type WeatherDataSumAggregateOutputType = {
    id: number | null
    cityId: number | null
    temperature: number | null
    humidity: number | null
    windSpeed: number | null
  }

  export type WeatherDataMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    timestamp: Date | null
    temperature: number | null
    humidity: number | null
    windSpeed: number | null
    description: string | null
    updatedAt: Date | null
  }

  export type WeatherDataMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    timestamp: Date | null
    temperature: number | null
    humidity: number | null
    windSpeed: number | null
    description: string | null
    updatedAt: Date | null
  }

  export type WeatherDataCountAggregateOutputType = {
    id: number
    cityId: number
    timestamp: number
    temperature: number
    humidity: number
    windSpeed: number
    description: number
    updatedAt: number
    _all: number
  }


  export type WeatherDataAvgAggregateInputType = {
    id?: true
    cityId?: true
    temperature?: true
    humidity?: true
    windSpeed?: true
  }

  export type WeatherDataSumAggregateInputType = {
    id?: true
    cityId?: true
    temperature?: true
    humidity?: true
    windSpeed?: true
  }

  export type WeatherDataMinAggregateInputType = {
    id?: true
    cityId?: true
    timestamp?: true
    temperature?: true
    humidity?: true
    windSpeed?: true
    description?: true
    updatedAt?: true
  }

  export type WeatherDataMaxAggregateInputType = {
    id?: true
    cityId?: true
    timestamp?: true
    temperature?: true
    humidity?: true
    windSpeed?: true
    description?: true
    updatedAt?: true
  }

  export type WeatherDataCountAggregateInputType = {
    id?: true
    cityId?: true
    timestamp?: true
    temperature?: true
    humidity?: true
    windSpeed?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type WeatherDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherData to aggregate.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherData
    **/
    _count?: true | WeatherDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherDataMaxAggregateInputType
  }

  export type GetWeatherDataAggregateType<T extends WeatherDataAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherData[P]>
      : GetScalarType<T[P], AggregateWeatherData[P]>
  }




  export type WeatherDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherDataWhereInput
    orderBy?: WeatherDataOrderByWithAggregationInput | WeatherDataOrderByWithAggregationInput[]
    by: WeatherDataScalarFieldEnum[] | WeatherDataScalarFieldEnum
    having?: WeatherDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherDataCountAggregateInputType | true
    _avg?: WeatherDataAvgAggregateInputType
    _sum?: WeatherDataSumAggregateInputType
    _min?: WeatherDataMinAggregateInputType
    _max?: WeatherDataMaxAggregateInputType
  }

  export type WeatherDataGroupByOutputType = {
    id: number
    cityId: number
    timestamp: Date
    temperature: number
    humidity: number
    windSpeed: number
    description: string | null
    updatedAt: Date
    _count: WeatherDataCountAggregateOutputType | null
    _avg: WeatherDataAvgAggregateOutputType | null
    _sum: WeatherDataSumAggregateOutputType | null
    _min: WeatherDataMinAggregateOutputType | null
    _max: WeatherDataMaxAggregateOutputType | null
  }

  type GetWeatherDataGroupByPayload<T extends WeatherDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherDataGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherDataGroupByOutputType[P]>
        }
      >
    >


  export type WeatherDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    timestamp?: boolean
    temperature?: boolean
    humidity?: boolean
    windSpeed?: boolean
    description?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weatherData"]>



  export type WeatherDataSelectScalar = {
    id?: boolean
    cityId?: boolean
    timestamp?: boolean
    temperature?: boolean
    humidity?: boolean
    windSpeed?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type WeatherDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cityId" | "timestamp" | "temperature" | "humidity" | "windSpeed" | "description" | "updatedAt", ExtArgs["result"]["weatherData"]>
  export type WeatherDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $WeatherDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherData"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      timestamp: Date
      temperature: number
      humidity: number
      windSpeed: number
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["weatherData"]>
    composites: {}
  }

  type WeatherDataGetPayload<S extends boolean | null | undefined | WeatherDataDefaultArgs> = $Result.GetResult<Prisma.$WeatherDataPayload, S>

  type WeatherDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherDataCountAggregateInputType | true
    }

  export interface WeatherDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherData'], meta: { name: 'WeatherData' } }
    /**
     * Find zero or one WeatherData that matches the filter.
     * @param {WeatherDataFindUniqueArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherDataFindUniqueArgs>(args: SelectSubset<T, WeatherDataFindUniqueArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeatherData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherDataFindUniqueOrThrowArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherDataFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindFirstArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherDataFindFirstArgs>(args?: SelectSubset<T, WeatherDataFindFirstArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindFirstOrThrowArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherDataFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeatherData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherData
     * const weatherData = await prisma.weatherData.findMany()
     * 
     * // Get first 10 WeatherData
     * const weatherData = await prisma.weatherData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherDataWithIdOnly = await prisma.weatherData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherDataFindManyArgs>(args?: SelectSubset<T, WeatherDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeatherData.
     * @param {WeatherDataCreateArgs} args - Arguments to create a WeatherData.
     * @example
     * // Create one WeatherData
     * const WeatherData = await prisma.weatherData.create({
     *   data: {
     *     // ... data to create a WeatherData
     *   }
     * })
     * 
     */
    create<T extends WeatherDataCreateArgs>(args: SelectSubset<T, WeatherDataCreateArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeatherData.
     * @param {WeatherDataCreateManyArgs} args - Arguments to create many WeatherData.
     * @example
     * // Create many WeatherData
     * const weatherData = await prisma.weatherData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherDataCreateManyArgs>(args?: SelectSubset<T, WeatherDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeatherData.
     * @param {WeatherDataDeleteArgs} args - Arguments to delete one WeatherData.
     * @example
     * // Delete one WeatherData
     * const WeatherData = await prisma.weatherData.delete({
     *   where: {
     *     // ... filter to delete one WeatherData
     *   }
     * })
     * 
     */
    delete<T extends WeatherDataDeleteArgs>(args: SelectSubset<T, WeatherDataDeleteArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeatherData.
     * @param {WeatherDataUpdateArgs} args - Arguments to update one WeatherData.
     * @example
     * // Update one WeatherData
     * const weatherData = await prisma.weatherData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherDataUpdateArgs>(args: SelectSubset<T, WeatherDataUpdateArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeatherData.
     * @param {WeatherDataDeleteManyArgs} args - Arguments to filter WeatherData to delete.
     * @example
     * // Delete a few WeatherData
     * const { count } = await prisma.weatherData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherDataDeleteManyArgs>(args?: SelectSubset<T, WeatherDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherData
     * const weatherData = await prisma.weatherData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherDataUpdateManyArgs>(args: SelectSubset<T, WeatherDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeatherData.
     * @param {WeatherDataUpsertArgs} args - Arguments to update or create a WeatherData.
     * @example
     * // Update or create a WeatherData
     * const weatherData = await prisma.weatherData.upsert({
     *   create: {
     *     // ... data to create a WeatherData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherData we want to update
     *   }
     * })
     */
    upsert<T extends WeatherDataUpsertArgs>(args: SelectSubset<T, WeatherDataUpsertArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataCountArgs} args - Arguments to filter WeatherData to count.
     * @example
     * // Count the number of WeatherData
     * const count = await prisma.weatherData.count({
     *   where: {
     *     // ... the filter for the WeatherData we want to count
     *   }
     * })
    **/
    count<T extends WeatherDataCountArgs>(
      args?: Subset<T, WeatherDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeatherDataAggregateArgs>(args: Subset<T, WeatherDataAggregateArgs>): Prisma.PrismaPromise<GetWeatherDataAggregateType<T>>

    /**
     * Group by WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataGroupByArgs} args - Group by arguments.
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
      T extends WeatherDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherDataGroupByArgs['orderBy'] }
        : { orderBy?: WeatherDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeatherDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherData model
   */
  readonly fields: WeatherDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeatherData model
   */
  interface WeatherDataFieldRefs {
    readonly id: FieldRef<"WeatherData", 'Int'>
    readonly cityId: FieldRef<"WeatherData", 'Int'>
    readonly timestamp: FieldRef<"WeatherData", 'DateTime'>
    readonly temperature: FieldRef<"WeatherData", 'Float'>
    readonly humidity: FieldRef<"WeatherData", 'Int'>
    readonly windSpeed: FieldRef<"WeatherData", 'Float'>
    readonly description: FieldRef<"WeatherData", 'String'>
    readonly updatedAt: FieldRef<"WeatherData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeatherData findUnique
   */
  export type WeatherDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData findUniqueOrThrow
   */
  export type WeatherDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData findFirst
   */
  export type WeatherDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherData.
     */
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * WeatherData findFirstOrThrow
   */
  export type WeatherDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherData.
     */
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * WeatherData findMany
   */
  export type WeatherDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * WeatherData create
   */
  export type WeatherDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * The data needed to create a WeatherData.
     */
    data: XOR<WeatherDataCreateInput, WeatherDataUncheckedCreateInput>
  }

  /**
   * WeatherData createMany
   */
  export type WeatherDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherData.
     */
    data: WeatherDataCreateManyInput | WeatherDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherData update
   */
  export type WeatherDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * The data needed to update a WeatherData.
     */
    data: XOR<WeatherDataUpdateInput, WeatherDataUncheckedUpdateInput>
    /**
     * Choose, which WeatherData to update.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData updateMany
   */
  export type WeatherDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherData.
     */
    data: XOR<WeatherDataUpdateManyMutationInput, WeatherDataUncheckedUpdateManyInput>
    /**
     * Filter which WeatherData to update
     */
    where?: WeatherDataWhereInput
    /**
     * Limit how many WeatherData to update.
     */
    limit?: number
  }

  /**
   * WeatherData upsert
   */
  export type WeatherDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * The filter to search for the WeatherData to update in case it exists.
     */
    where: WeatherDataWhereUniqueInput
    /**
     * In case the WeatherData found by the `where` argument doesn't exist, create a new WeatherData with this data.
     */
    create: XOR<WeatherDataCreateInput, WeatherDataUncheckedCreateInput>
    /**
     * In case the WeatherData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherDataUpdateInput, WeatherDataUncheckedUpdateInput>
  }

  /**
   * WeatherData delete
   */
  export type WeatherDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter which WeatherData to delete.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData deleteMany
   */
  export type WeatherDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherData to delete
     */
    where?: WeatherDataWhereInput
    /**
     * Limit how many WeatherData to delete.
     */
    limit?: number
  }

  /**
   * WeatherData without action
   */
  export type WeatherDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteLocation
   */

  export type AggregateFavoriteLocation = {
    _count: FavoriteLocationCountAggregateOutputType | null
    _avg: FavoriteLocationAvgAggregateOutputType | null
    _sum: FavoriteLocationSumAggregateOutputType | null
    _min: FavoriteLocationMinAggregateOutputType | null
    _max: FavoriteLocationMaxAggregateOutputType | null
  }

  export type FavoriteLocationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cityId: number | null
  }

  export type FavoriteLocationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cityId: number | null
  }

  export type FavoriteLocationMinAggregateOutputType = {
    id: number | null
    favoriteName: string | null
    userId: number | null
    cityId: number | null
  }

  export type FavoriteLocationMaxAggregateOutputType = {
    id: number | null
    favoriteName: string | null
    userId: number | null
    cityId: number | null
  }

  export type FavoriteLocationCountAggregateOutputType = {
    id: number
    favoriteName: number
    userId: number
    cityId: number
    _all: number
  }


  export type FavoriteLocationAvgAggregateInputType = {
    id?: true
    userId?: true
    cityId?: true
  }

  export type FavoriteLocationSumAggregateInputType = {
    id?: true
    userId?: true
    cityId?: true
  }

  export type FavoriteLocationMinAggregateInputType = {
    id?: true
    favoriteName?: true
    userId?: true
    cityId?: true
  }

  export type FavoriteLocationMaxAggregateInputType = {
    id?: true
    favoriteName?: true
    userId?: true
    cityId?: true
  }

  export type FavoriteLocationCountAggregateInputType = {
    id?: true
    favoriteName?: true
    userId?: true
    cityId?: true
    _all?: true
  }

  export type FavoriteLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteLocation to aggregate.
     */
    where?: FavoriteLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteLocations to fetch.
     */
    orderBy?: FavoriteLocationOrderByWithRelationInput | FavoriteLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteLocations
    **/
    _count?: true | FavoriteLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteLocationMaxAggregateInputType
  }

  export type GetFavoriteLocationAggregateType<T extends FavoriteLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteLocation[P]>
      : GetScalarType<T[P], AggregateFavoriteLocation[P]>
  }




  export type FavoriteLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteLocationWhereInput
    orderBy?: FavoriteLocationOrderByWithAggregationInput | FavoriteLocationOrderByWithAggregationInput[]
    by: FavoriteLocationScalarFieldEnum[] | FavoriteLocationScalarFieldEnum
    having?: FavoriteLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteLocationCountAggregateInputType | true
    _avg?: FavoriteLocationAvgAggregateInputType
    _sum?: FavoriteLocationSumAggregateInputType
    _min?: FavoriteLocationMinAggregateInputType
    _max?: FavoriteLocationMaxAggregateInputType
  }

  export type FavoriteLocationGroupByOutputType = {
    id: number
    favoriteName: string
    userId: number
    cityId: number
    _count: FavoriteLocationCountAggregateOutputType | null
    _avg: FavoriteLocationAvgAggregateOutputType | null
    _sum: FavoriteLocationSumAggregateOutputType | null
    _min: FavoriteLocationMinAggregateOutputType | null
    _max: FavoriteLocationMaxAggregateOutputType | null
  }

  type GetFavoriteLocationGroupByPayload<T extends FavoriteLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteLocationGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteLocationGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    favoriteName?: boolean
    userId?: boolean
    cityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteLocation"]>



  export type FavoriteLocationSelectScalar = {
    id?: boolean
    favoriteName?: boolean
    userId?: boolean
    cityId?: boolean
  }

  export type FavoriteLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "favoriteName" | "userId" | "cityId", ExtArgs["result"]["favoriteLocation"]>
  export type FavoriteLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $FavoriteLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteLocation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      favoriteName: string
      userId: number
      cityId: number
    }, ExtArgs["result"]["favoriteLocation"]>
    composites: {}
  }

  type FavoriteLocationGetPayload<S extends boolean | null | undefined | FavoriteLocationDefaultArgs> = $Result.GetResult<Prisma.$FavoriteLocationPayload, S>

  type FavoriteLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteLocationCountAggregateInputType | true
    }

  export interface FavoriteLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteLocation'], meta: { name: 'FavoriteLocation' } }
    /**
     * Find zero or one FavoriteLocation that matches the filter.
     * @param {FavoriteLocationFindUniqueArgs} args - Arguments to find a FavoriteLocation
     * @example
     * // Get one FavoriteLocation
     * const favoriteLocation = await prisma.favoriteLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteLocationFindUniqueArgs>(args: SelectSubset<T, FavoriteLocationFindUniqueArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteLocationFindUniqueOrThrowArgs} args - Arguments to find a FavoriteLocation
     * @example
     * // Get one FavoriteLocation
     * const favoriteLocation = await prisma.favoriteLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationFindFirstArgs} args - Arguments to find a FavoriteLocation
     * @example
     * // Get one FavoriteLocation
     * const favoriteLocation = await prisma.favoriteLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteLocationFindFirstArgs>(args?: SelectSubset<T, FavoriteLocationFindFirstArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationFindFirstOrThrowArgs} args - Arguments to find a FavoriteLocation
     * @example
     * // Get one FavoriteLocation
     * const favoriteLocation = await prisma.favoriteLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteLocations
     * const favoriteLocations = await prisma.favoriteLocation.findMany()
     * 
     * // Get first 10 FavoriteLocations
     * const favoriteLocations = await prisma.favoriteLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteLocationWithIdOnly = await prisma.favoriteLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteLocationFindManyArgs>(args?: SelectSubset<T, FavoriteLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteLocation.
     * @param {FavoriteLocationCreateArgs} args - Arguments to create a FavoriteLocation.
     * @example
     * // Create one FavoriteLocation
     * const FavoriteLocation = await prisma.favoriteLocation.create({
     *   data: {
     *     // ... data to create a FavoriteLocation
     *   }
     * })
     * 
     */
    create<T extends FavoriteLocationCreateArgs>(args: SelectSubset<T, FavoriteLocationCreateArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteLocations.
     * @param {FavoriteLocationCreateManyArgs} args - Arguments to create many FavoriteLocations.
     * @example
     * // Create many FavoriteLocations
     * const favoriteLocation = await prisma.favoriteLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteLocationCreateManyArgs>(args?: SelectSubset<T, FavoriteLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavoriteLocation.
     * @param {FavoriteLocationDeleteArgs} args - Arguments to delete one FavoriteLocation.
     * @example
     * // Delete one FavoriteLocation
     * const FavoriteLocation = await prisma.favoriteLocation.delete({
     *   where: {
     *     // ... filter to delete one FavoriteLocation
     *   }
     * })
     * 
     */
    delete<T extends FavoriteLocationDeleteArgs>(args: SelectSubset<T, FavoriteLocationDeleteArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteLocation.
     * @param {FavoriteLocationUpdateArgs} args - Arguments to update one FavoriteLocation.
     * @example
     * // Update one FavoriteLocation
     * const favoriteLocation = await prisma.favoriteLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteLocationUpdateArgs>(args: SelectSubset<T, FavoriteLocationUpdateArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteLocations.
     * @param {FavoriteLocationDeleteManyArgs} args - Arguments to filter FavoriteLocations to delete.
     * @example
     * // Delete a few FavoriteLocations
     * const { count } = await prisma.favoriteLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteLocationDeleteManyArgs>(args?: SelectSubset<T, FavoriteLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteLocations
     * const favoriteLocation = await prisma.favoriteLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteLocationUpdateManyArgs>(args: SelectSubset<T, FavoriteLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteLocation.
     * @param {FavoriteLocationUpsertArgs} args - Arguments to update or create a FavoriteLocation.
     * @example
     * // Update or create a FavoriteLocation
     * const favoriteLocation = await prisma.favoriteLocation.upsert({
     *   create: {
     *     // ... data to create a FavoriteLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteLocation we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteLocationUpsertArgs>(args: SelectSubset<T, FavoriteLocationUpsertArgs<ExtArgs>>): Prisma__FavoriteLocationClient<$Result.GetResult<Prisma.$FavoriteLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationCountArgs} args - Arguments to filter FavoriteLocations to count.
     * @example
     * // Count the number of FavoriteLocations
     * const count = await prisma.favoriteLocation.count({
     *   where: {
     *     // ... the filter for the FavoriteLocations we want to count
     *   }
     * })
    **/
    count<T extends FavoriteLocationCountArgs>(
      args?: Subset<T, FavoriteLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteLocationAggregateArgs>(args: Subset<T, FavoriteLocationAggregateArgs>): Prisma.PrismaPromise<GetFavoriteLocationAggregateType<T>>

    /**
     * Group by FavoriteLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteLocationGroupByArgs} args - Group by arguments.
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
      T extends FavoriteLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteLocationGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteLocation model
   */
  readonly fields: FavoriteLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavoriteLocation model
   */
  interface FavoriteLocationFieldRefs {
    readonly id: FieldRef<"FavoriteLocation", 'Int'>
    readonly favoriteName: FieldRef<"FavoriteLocation", 'String'>
    readonly userId: FieldRef<"FavoriteLocation", 'Int'>
    readonly cityId: FieldRef<"FavoriteLocation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteLocation findUnique
   */
  export type FavoriteLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteLocation to fetch.
     */
    where: FavoriteLocationWhereUniqueInput
  }

  /**
   * FavoriteLocation findUniqueOrThrow
   */
  export type FavoriteLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteLocation to fetch.
     */
    where: FavoriteLocationWhereUniqueInput
  }

  /**
   * FavoriteLocation findFirst
   */
  export type FavoriteLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteLocation to fetch.
     */
    where?: FavoriteLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteLocations to fetch.
     */
    orderBy?: FavoriteLocationOrderByWithRelationInput | FavoriteLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteLocations.
     */
    cursor?: FavoriteLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteLocations.
     */
    distinct?: FavoriteLocationScalarFieldEnum | FavoriteLocationScalarFieldEnum[]
  }

  /**
   * FavoriteLocation findFirstOrThrow
   */
  export type FavoriteLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteLocation to fetch.
     */
    where?: FavoriteLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteLocations to fetch.
     */
    orderBy?: FavoriteLocationOrderByWithRelationInput | FavoriteLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteLocations.
     */
    cursor?: FavoriteLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteLocations.
     */
    distinct?: FavoriteLocationScalarFieldEnum | FavoriteLocationScalarFieldEnum[]
  }

  /**
   * FavoriteLocation findMany
   */
  export type FavoriteLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteLocations to fetch.
     */
    where?: FavoriteLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteLocations to fetch.
     */
    orderBy?: FavoriteLocationOrderByWithRelationInput | FavoriteLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteLocations.
     */
    cursor?: FavoriteLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteLocations.
     */
    skip?: number
    distinct?: FavoriteLocationScalarFieldEnum | FavoriteLocationScalarFieldEnum[]
  }

  /**
   * FavoriteLocation create
   */
  export type FavoriteLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteLocation.
     */
    data: XOR<FavoriteLocationCreateInput, FavoriteLocationUncheckedCreateInput>
  }

  /**
   * FavoriteLocation createMany
   */
  export type FavoriteLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteLocations.
     */
    data: FavoriteLocationCreateManyInput | FavoriteLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteLocation update
   */
  export type FavoriteLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteLocation.
     */
    data: XOR<FavoriteLocationUpdateInput, FavoriteLocationUncheckedUpdateInput>
    /**
     * Choose, which FavoriteLocation to update.
     */
    where: FavoriteLocationWhereUniqueInput
  }

  /**
   * FavoriteLocation updateMany
   */
  export type FavoriteLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteLocations.
     */
    data: XOR<FavoriteLocationUpdateManyMutationInput, FavoriteLocationUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteLocations to update
     */
    where?: FavoriteLocationWhereInput
    /**
     * Limit how many FavoriteLocations to update.
     */
    limit?: number
  }

  /**
   * FavoriteLocation upsert
   */
  export type FavoriteLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteLocation to update in case it exists.
     */
    where: FavoriteLocationWhereUniqueInput
    /**
     * In case the FavoriteLocation found by the `where` argument doesn't exist, create a new FavoriteLocation with this data.
     */
    create: XOR<FavoriteLocationCreateInput, FavoriteLocationUncheckedCreateInput>
    /**
     * In case the FavoriteLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteLocationUpdateInput, FavoriteLocationUncheckedUpdateInput>
  }

  /**
   * FavoriteLocation delete
   */
  export type FavoriteLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
    /**
     * Filter which FavoriteLocation to delete.
     */
    where: FavoriteLocationWhereUniqueInput
  }

  /**
   * FavoriteLocation deleteMany
   */
  export type FavoriteLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteLocations to delete
     */
    where?: FavoriteLocationWhereInput
    /**
     * Limit how many FavoriteLocations to delete.
     */
    limit?: number
  }

  /**
   * FavoriteLocation without action
   */
  export type FavoriteLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteLocation
     */
    select?: FavoriteLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteLocation
     */
    omit?: FavoriteLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteLocationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    cityName: 'cityName',
    locationName: 'locationName',
    latitude: 'latitude',
    longitude: 'longitude',
    updatedAt: 'updatedAt'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const WeatherDataScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    timestamp: 'timestamp',
    temperature: 'temperature',
    humidity: 'humidity',
    windSpeed: 'windSpeed',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type WeatherDataScalarFieldEnum = (typeof WeatherDataScalarFieldEnum)[keyof typeof WeatherDataScalarFieldEnum]


  export const FavoriteLocationScalarFieldEnum: {
    id: 'id',
    favoriteName: 'favoriteName',
    userId: 'userId',
    cityId: 'cityId'
  };

  export type FavoriteLocationScalarFieldEnum = (typeof FavoriteLocationScalarFieldEnum)[keyof typeof FavoriteLocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CityOrderByRelevanceFieldEnum: {
    cityName: 'cityName',
    locationName: 'locationName'
  };

  export type CityOrderByRelevanceFieldEnum = (typeof CityOrderByRelevanceFieldEnum)[keyof typeof CityOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const WeatherDataOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type WeatherDataOrderByRelevanceFieldEnum = (typeof WeatherDataOrderByRelevanceFieldEnum)[keyof typeof WeatherDataOrderByRelevanceFieldEnum]


  export const FavoriteLocationOrderByRelevanceFieldEnum: {
    favoriteName: 'favoriteName'
  };

  export type FavoriteLocationOrderByRelevanceFieldEnum = (typeof FavoriteLocationOrderByRelevanceFieldEnum)[keyof typeof FavoriteLocationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favorites?: FavoriteLocationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favorites?: FavoriteLocationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favorites?: FavoriteLocationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    cityName?: StringFilter<"City"> | string
    locationName?: StringFilter<"City"> | string
    latitude?: FloatFilter<"City"> | number
    longitude?: FloatFilter<"City"> | number
    updatedAt?: DateTimeFilter<"City"> | Date | string
    weatherRecords?: WeatherDataListRelationFilter
    favorites?: FavoriteLocationListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    cityName?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    updatedAt?: SortOrder
    weatherRecords?: WeatherDataOrderByRelationAggregateInput
    favorites?: FavoriteLocationOrderByRelationAggregateInput
    _relevance?: CityOrderByRelevanceInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    cityName?: StringFilter<"City"> | string
    locationName?: StringFilter<"City"> | string
    latitude?: FloatFilter<"City"> | number
    longitude?: FloatFilter<"City"> | number
    updatedAt?: DateTimeFilter<"City"> | Date | string
    weatherRecords?: WeatherDataListRelationFilter
    favorites?: FavoriteLocationListRelationFilter
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    cityName?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    updatedAt?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    cityName?: StringWithAggregatesFilter<"City"> | string
    locationName?: StringWithAggregatesFilter<"City"> | string
    latitude?: FloatWithAggregatesFilter<"City"> | number
    longitude?: FloatWithAggregatesFilter<"City"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type WeatherDataWhereInput = {
    AND?: WeatherDataWhereInput | WeatherDataWhereInput[]
    OR?: WeatherDataWhereInput[]
    NOT?: WeatherDataWhereInput | WeatherDataWhereInput[]
    id?: IntFilter<"WeatherData"> | number
    cityId?: IntFilter<"WeatherData"> | number
    timestamp?: DateTimeFilter<"WeatherData"> | Date | string
    temperature?: FloatFilter<"WeatherData"> | number
    humidity?: IntFilter<"WeatherData"> | number
    windSpeed?: FloatFilter<"WeatherData"> | number
    description?: StringNullableFilter<"WeatherData"> | string | null
    updatedAt?: DateTimeFilter<"WeatherData"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type WeatherDataOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    city?: CityOrderByWithRelationInput
    _relevance?: WeatherDataOrderByRelevanceInput
  }

  export type WeatherDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeatherDataWhereInput | WeatherDataWhereInput[]
    OR?: WeatherDataWhereInput[]
    NOT?: WeatherDataWhereInput | WeatherDataWhereInput[]
    cityId?: IntFilter<"WeatherData"> | number
    timestamp?: DateTimeFilter<"WeatherData"> | Date | string
    temperature?: FloatFilter<"WeatherData"> | number
    humidity?: IntFilter<"WeatherData"> | number
    windSpeed?: FloatFilter<"WeatherData"> | number
    description?: StringNullableFilter<"WeatherData"> | string | null
    updatedAt?: DateTimeFilter<"WeatherData"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id">

  export type WeatherDataOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: WeatherDataCountOrderByAggregateInput
    _avg?: WeatherDataAvgOrderByAggregateInput
    _max?: WeatherDataMaxOrderByAggregateInput
    _min?: WeatherDataMinOrderByAggregateInput
    _sum?: WeatherDataSumOrderByAggregateInput
  }

  export type WeatherDataScalarWhereWithAggregatesInput = {
    AND?: WeatherDataScalarWhereWithAggregatesInput | WeatherDataScalarWhereWithAggregatesInput[]
    OR?: WeatherDataScalarWhereWithAggregatesInput[]
    NOT?: WeatherDataScalarWhereWithAggregatesInput | WeatherDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeatherData"> | number
    cityId?: IntWithAggregatesFilter<"WeatherData"> | number
    timestamp?: DateTimeWithAggregatesFilter<"WeatherData"> | Date | string
    temperature?: FloatWithAggregatesFilter<"WeatherData"> | number
    humidity?: IntWithAggregatesFilter<"WeatherData"> | number
    windSpeed?: FloatWithAggregatesFilter<"WeatherData"> | number
    description?: StringNullableWithAggregatesFilter<"WeatherData"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"WeatherData"> | Date | string
  }

  export type FavoriteLocationWhereInput = {
    AND?: FavoriteLocationWhereInput | FavoriteLocationWhereInput[]
    OR?: FavoriteLocationWhereInput[]
    NOT?: FavoriteLocationWhereInput | FavoriteLocationWhereInput[]
    id?: IntFilter<"FavoriteLocation"> | number
    favoriteName?: StringFilter<"FavoriteLocation"> | string
    userId?: IntFilter<"FavoriteLocation"> | number
    cityId?: IntFilter<"FavoriteLocation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type FavoriteLocationOrderByWithRelationInput = {
    id?: SortOrder
    favoriteName?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    user?: UserOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    _relevance?: FavoriteLocationOrderByRelevanceInput
  }

  export type FavoriteLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_cityId?: FavoriteLocationUserIdCityIdCompoundUniqueInput
    AND?: FavoriteLocationWhereInput | FavoriteLocationWhereInput[]
    OR?: FavoriteLocationWhereInput[]
    NOT?: FavoriteLocationWhereInput | FavoriteLocationWhereInput[]
    favoriteName?: StringFilter<"FavoriteLocation"> | string
    userId?: IntFilter<"FavoriteLocation"> | number
    cityId?: IntFilter<"FavoriteLocation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id" | "userId_cityId">

  export type FavoriteLocationOrderByWithAggregationInput = {
    id?: SortOrder
    favoriteName?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    _count?: FavoriteLocationCountOrderByAggregateInput
    _avg?: FavoriteLocationAvgOrderByAggregateInput
    _max?: FavoriteLocationMaxOrderByAggregateInput
    _min?: FavoriteLocationMinOrderByAggregateInput
    _sum?: FavoriteLocationSumOrderByAggregateInput
  }

  export type FavoriteLocationScalarWhereWithAggregatesInput = {
    AND?: FavoriteLocationScalarWhereWithAggregatesInput | FavoriteLocationScalarWhereWithAggregatesInput[]
    OR?: FavoriteLocationScalarWhereWithAggregatesInput[]
    NOT?: FavoriteLocationScalarWhereWithAggregatesInput | FavoriteLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteLocation"> | number
    favoriteName?: StringWithAggregatesFilter<"FavoriteLocation"> | string
    userId?: IntWithAggregatesFilter<"FavoriteLocation"> | number
    cityId?: IntWithAggregatesFilter<"FavoriteLocation"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateInput = {
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
    weatherRecords?: WeatherDataCreateNestedManyWithoutCityInput
    favorites?: FavoriteLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
    weatherRecords?: WeatherDataUncheckedCreateNestedManyWithoutCityInput
    favorites?: FavoriteLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherRecords?: WeatherDataUpdateManyWithoutCityNestedInput
    favorites?: FavoriteLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherRecords?: WeatherDataUncheckedUpdateManyWithoutCityNestedInput
    favorites?: FavoriteLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataCreateInput = {
    timestamp: Date | string
    temperature: number
    humidity: number
    windSpeed: number
    description?: string | null
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutWeatherRecordsInput
  }

  export type WeatherDataUncheckedCreateInput = {
    id?: number
    cityId: number
    timestamp: Date | string
    temperature: number
    humidity: number
    windSpeed: number
    description?: string | null
    updatedAt?: Date | string
  }

  export type WeatherDataUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutWeatherRecordsNestedInput
  }

  export type WeatherDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataCreateManyInput = {
    id?: number
    cityId: number
    timestamp: Date | string
    temperature: number
    humidity: number
    windSpeed: number
    description?: string | null
    updatedAt?: Date | string
  }

  export type WeatherDataUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteLocationCreateInput = {
    favoriteName: string
    user: UserCreateNestedOneWithoutFavoritesInput
    city: CityCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteLocationUncheckedCreateInput = {
    id?: number
    favoriteName: string
    userId: number
    cityId: number
  }

  export type FavoriteLocationUpdateInput = {
    favoriteName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    city?: CityUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteLocationCreateManyInput = {
    id?: number
    favoriteName: string
    userId: number
    cityId: number
  }

  export type FavoriteLocationUpdateManyMutationInput = {
    favoriteName?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FavoriteLocationListRelationFilter = {
    every?: FavoriteLocationWhereInput
    some?: FavoriteLocationWhereInput
    none?: FavoriteLocationWhereInput
  }

  export type FavoriteLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WeatherDataListRelationFilter = {
    every?: WeatherDataWhereInput
    some?: WeatherDataWhereInput
    none?: WeatherDataWhereInput
  }

  export type WeatherDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityOrderByRelevanceInput = {
    fields: CityOrderByRelevanceFieldEnum | CityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    updatedAt?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WeatherDataOrderByRelevanceInput = {
    fields: WeatherDataOrderByRelevanceFieldEnum | WeatherDataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WeatherDataCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherDataAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
  }

  export type WeatherDataMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherDataMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherDataSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    windSpeed?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteLocationOrderByRelevanceInput = {
    fields: FavoriteLocationOrderByRelevanceFieldEnum | FavoriteLocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FavoriteLocationUserIdCityIdCompoundUniqueInput = {
    userId: number
    cityId: number
  }

  export type FavoriteLocationCountOrderByAggregateInput = {
    id?: SortOrder
    favoriteName?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
  }

  export type FavoriteLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
  }

  export type FavoriteLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    favoriteName?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
  }

  export type FavoriteLocationMinOrderByAggregateInput = {
    id?: SortOrder
    favoriteName?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
  }

  export type FavoriteLocationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
  }

  export type FavoriteLocationCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteLocationCreateWithoutUserInput, FavoriteLocationUncheckedCreateWithoutUserInput> | FavoriteLocationCreateWithoutUserInput[] | FavoriteLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutUserInput | FavoriteLocationCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteLocationCreateManyUserInputEnvelope
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
  }

  export type FavoriteLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteLocationCreateWithoutUserInput, FavoriteLocationUncheckedCreateWithoutUserInput> | FavoriteLocationCreateWithoutUserInput[] | FavoriteLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutUserInput | FavoriteLocationCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteLocationCreateManyUserInputEnvelope
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FavoriteLocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteLocationCreateWithoutUserInput, FavoriteLocationUncheckedCreateWithoutUserInput> | FavoriteLocationCreateWithoutUserInput[] | FavoriteLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutUserInput | FavoriteLocationCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteLocationUpsertWithWhereUniqueWithoutUserInput | FavoriteLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteLocationCreateManyUserInputEnvelope
    set?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    disconnect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    delete?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    update?: FavoriteLocationUpdateWithWhereUniqueWithoutUserInput | FavoriteLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteLocationUpdateManyWithWhereWithoutUserInput | FavoriteLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteLocationScalarWhereInput | FavoriteLocationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavoriteLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteLocationCreateWithoutUserInput, FavoriteLocationUncheckedCreateWithoutUserInput> | FavoriteLocationCreateWithoutUserInput[] | FavoriteLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutUserInput | FavoriteLocationCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteLocationUpsertWithWhereUniqueWithoutUserInput | FavoriteLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteLocationCreateManyUserInputEnvelope
    set?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    disconnect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    delete?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    update?: FavoriteLocationUpdateWithWhereUniqueWithoutUserInput | FavoriteLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteLocationUpdateManyWithWhereWithoutUserInput | FavoriteLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteLocationScalarWhereInput | FavoriteLocationScalarWhereInput[]
  }

  export type WeatherDataCreateNestedManyWithoutCityInput = {
    create?: XOR<WeatherDataCreateWithoutCityInput, WeatherDataUncheckedCreateWithoutCityInput> | WeatherDataCreateWithoutCityInput[] | WeatherDataUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutCityInput | WeatherDataCreateOrConnectWithoutCityInput[]
    createMany?: WeatherDataCreateManyCityInputEnvelope
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
  }

  export type FavoriteLocationCreateNestedManyWithoutCityInput = {
    create?: XOR<FavoriteLocationCreateWithoutCityInput, FavoriteLocationUncheckedCreateWithoutCityInput> | FavoriteLocationCreateWithoutCityInput[] | FavoriteLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutCityInput | FavoriteLocationCreateOrConnectWithoutCityInput[]
    createMany?: FavoriteLocationCreateManyCityInputEnvelope
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
  }

  export type WeatherDataUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<WeatherDataCreateWithoutCityInput, WeatherDataUncheckedCreateWithoutCityInput> | WeatherDataCreateWithoutCityInput[] | WeatherDataUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutCityInput | WeatherDataCreateOrConnectWithoutCityInput[]
    createMany?: WeatherDataCreateManyCityInputEnvelope
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
  }

  export type FavoriteLocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<FavoriteLocationCreateWithoutCityInput, FavoriteLocationUncheckedCreateWithoutCityInput> | FavoriteLocationCreateWithoutCityInput[] | FavoriteLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutCityInput | FavoriteLocationCreateOrConnectWithoutCityInput[]
    createMany?: FavoriteLocationCreateManyCityInputEnvelope
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeatherDataUpdateManyWithoutCityNestedInput = {
    create?: XOR<WeatherDataCreateWithoutCityInput, WeatherDataUncheckedCreateWithoutCityInput> | WeatherDataCreateWithoutCityInput[] | WeatherDataUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutCityInput | WeatherDataCreateOrConnectWithoutCityInput[]
    upsert?: WeatherDataUpsertWithWhereUniqueWithoutCityInput | WeatherDataUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: WeatherDataCreateManyCityInputEnvelope
    set?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    disconnect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    delete?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    update?: WeatherDataUpdateWithWhereUniqueWithoutCityInput | WeatherDataUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: WeatherDataUpdateManyWithWhereWithoutCityInput | WeatherDataUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
  }

  export type FavoriteLocationUpdateManyWithoutCityNestedInput = {
    create?: XOR<FavoriteLocationCreateWithoutCityInput, FavoriteLocationUncheckedCreateWithoutCityInput> | FavoriteLocationCreateWithoutCityInput[] | FavoriteLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutCityInput | FavoriteLocationCreateOrConnectWithoutCityInput[]
    upsert?: FavoriteLocationUpsertWithWhereUniqueWithoutCityInput | FavoriteLocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: FavoriteLocationCreateManyCityInputEnvelope
    set?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    disconnect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    delete?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    update?: FavoriteLocationUpdateWithWhereUniqueWithoutCityInput | FavoriteLocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: FavoriteLocationUpdateManyWithWhereWithoutCityInput | FavoriteLocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: FavoriteLocationScalarWhereInput | FavoriteLocationScalarWhereInput[]
  }

  export type WeatherDataUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<WeatherDataCreateWithoutCityInput, WeatherDataUncheckedCreateWithoutCityInput> | WeatherDataCreateWithoutCityInput[] | WeatherDataUncheckedCreateWithoutCityInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutCityInput | WeatherDataCreateOrConnectWithoutCityInput[]
    upsert?: WeatherDataUpsertWithWhereUniqueWithoutCityInput | WeatherDataUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: WeatherDataCreateManyCityInputEnvelope
    set?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    disconnect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    delete?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    update?: WeatherDataUpdateWithWhereUniqueWithoutCityInput | WeatherDataUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: WeatherDataUpdateManyWithWhereWithoutCityInput | WeatherDataUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
  }

  export type FavoriteLocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<FavoriteLocationCreateWithoutCityInput, FavoriteLocationUncheckedCreateWithoutCityInput> | FavoriteLocationCreateWithoutCityInput[] | FavoriteLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: FavoriteLocationCreateOrConnectWithoutCityInput | FavoriteLocationCreateOrConnectWithoutCityInput[]
    upsert?: FavoriteLocationUpsertWithWhereUniqueWithoutCityInput | FavoriteLocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: FavoriteLocationCreateManyCityInputEnvelope
    set?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    disconnect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    delete?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    connect?: FavoriteLocationWhereUniqueInput | FavoriteLocationWhereUniqueInput[]
    update?: FavoriteLocationUpdateWithWhereUniqueWithoutCityInput | FavoriteLocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: FavoriteLocationUpdateManyWithWhereWithoutCityInput | FavoriteLocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: FavoriteLocationScalarWhereInput | FavoriteLocationScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutWeatherRecordsInput = {
    create?: XOR<CityCreateWithoutWeatherRecordsInput, CityUncheckedCreateWithoutWeatherRecordsInput>
    connectOrCreate?: CityCreateOrConnectWithoutWeatherRecordsInput
    connect?: CityWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CityUpdateOneRequiredWithoutWeatherRecordsNestedInput = {
    create?: XOR<CityCreateWithoutWeatherRecordsInput, CityUncheckedCreateWithoutWeatherRecordsInput>
    connectOrCreate?: CityCreateOrConnectWithoutWeatherRecordsInput
    upsert?: CityUpsertWithoutWeatherRecordsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutWeatherRecordsInput, CityUpdateWithoutWeatherRecordsInput>, CityUncheckedUpdateWithoutWeatherRecordsInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<CityCreateWithoutFavoritesInput, CityUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CityCreateOrConnectWithoutFavoritesInput
    connect?: CityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type CityUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<CityCreateWithoutFavoritesInput, CityUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CityCreateOrConnectWithoutFavoritesInput
    upsert?: CityUpsertWithoutFavoritesInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutFavoritesInput, CityUpdateWithoutFavoritesInput>, CityUncheckedUpdateWithoutFavoritesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FavoriteLocationCreateWithoutUserInput = {
    favoriteName: string
    city: CityCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteLocationUncheckedCreateWithoutUserInput = {
    id?: number
    favoriteName: string
    cityId: number
  }

  export type FavoriteLocationCreateOrConnectWithoutUserInput = {
    where: FavoriteLocationWhereUniqueInput
    create: XOR<FavoriteLocationCreateWithoutUserInput, FavoriteLocationUncheckedCreateWithoutUserInput>
  }

  export type FavoriteLocationCreateManyUserInputEnvelope = {
    data: FavoriteLocationCreateManyUserInput | FavoriteLocationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteLocationWhereUniqueInput
    update: XOR<FavoriteLocationUpdateWithoutUserInput, FavoriteLocationUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteLocationCreateWithoutUserInput, FavoriteLocationUncheckedCreateWithoutUserInput>
  }

  export type FavoriteLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteLocationWhereUniqueInput
    data: XOR<FavoriteLocationUpdateWithoutUserInput, FavoriteLocationUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteLocationUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteLocationScalarWhereInput
    data: XOR<FavoriteLocationUpdateManyMutationInput, FavoriteLocationUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteLocationScalarWhereInput = {
    AND?: FavoriteLocationScalarWhereInput | FavoriteLocationScalarWhereInput[]
    OR?: FavoriteLocationScalarWhereInput[]
    NOT?: FavoriteLocationScalarWhereInput | FavoriteLocationScalarWhereInput[]
    id?: IntFilter<"FavoriteLocation"> | number
    favoriteName?: StringFilter<"FavoriteLocation"> | string
    userId?: IntFilter<"FavoriteLocation"> | number
    cityId?: IntFilter<"FavoriteLocation"> | number
  }

  export type WeatherDataCreateWithoutCityInput = {
    timestamp: Date | string
    temperature: number
    humidity: number
    windSpeed: number
    description?: string | null
    updatedAt?: Date | string
  }

  export type WeatherDataUncheckedCreateWithoutCityInput = {
    id?: number
    timestamp: Date | string
    temperature: number
    humidity: number
    windSpeed: number
    description?: string | null
    updatedAt?: Date | string
  }

  export type WeatherDataCreateOrConnectWithoutCityInput = {
    where: WeatherDataWhereUniqueInput
    create: XOR<WeatherDataCreateWithoutCityInput, WeatherDataUncheckedCreateWithoutCityInput>
  }

  export type WeatherDataCreateManyCityInputEnvelope = {
    data: WeatherDataCreateManyCityInput | WeatherDataCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteLocationCreateWithoutCityInput = {
    favoriteName: string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteLocationUncheckedCreateWithoutCityInput = {
    id?: number
    favoriteName: string
    userId: number
  }

  export type FavoriteLocationCreateOrConnectWithoutCityInput = {
    where: FavoriteLocationWhereUniqueInput
    create: XOR<FavoriteLocationCreateWithoutCityInput, FavoriteLocationUncheckedCreateWithoutCityInput>
  }

  export type FavoriteLocationCreateManyCityInputEnvelope = {
    data: FavoriteLocationCreateManyCityInput | FavoriteLocationCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type WeatherDataUpsertWithWhereUniqueWithoutCityInput = {
    where: WeatherDataWhereUniqueInput
    update: XOR<WeatherDataUpdateWithoutCityInput, WeatherDataUncheckedUpdateWithoutCityInput>
    create: XOR<WeatherDataCreateWithoutCityInput, WeatherDataUncheckedCreateWithoutCityInput>
  }

  export type WeatherDataUpdateWithWhereUniqueWithoutCityInput = {
    where: WeatherDataWhereUniqueInput
    data: XOR<WeatherDataUpdateWithoutCityInput, WeatherDataUncheckedUpdateWithoutCityInput>
  }

  export type WeatherDataUpdateManyWithWhereWithoutCityInput = {
    where: WeatherDataScalarWhereInput
    data: XOR<WeatherDataUpdateManyMutationInput, WeatherDataUncheckedUpdateManyWithoutCityInput>
  }

  export type WeatherDataScalarWhereInput = {
    AND?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
    OR?: WeatherDataScalarWhereInput[]
    NOT?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
    id?: IntFilter<"WeatherData"> | number
    cityId?: IntFilter<"WeatherData"> | number
    timestamp?: DateTimeFilter<"WeatherData"> | Date | string
    temperature?: FloatFilter<"WeatherData"> | number
    humidity?: IntFilter<"WeatherData"> | number
    windSpeed?: FloatFilter<"WeatherData"> | number
    description?: StringNullableFilter<"WeatherData"> | string | null
    updatedAt?: DateTimeFilter<"WeatherData"> | Date | string
  }

  export type FavoriteLocationUpsertWithWhereUniqueWithoutCityInput = {
    where: FavoriteLocationWhereUniqueInput
    update: XOR<FavoriteLocationUpdateWithoutCityInput, FavoriteLocationUncheckedUpdateWithoutCityInput>
    create: XOR<FavoriteLocationCreateWithoutCityInput, FavoriteLocationUncheckedCreateWithoutCityInput>
  }

  export type FavoriteLocationUpdateWithWhereUniqueWithoutCityInput = {
    where: FavoriteLocationWhereUniqueInput
    data: XOR<FavoriteLocationUpdateWithoutCityInput, FavoriteLocationUncheckedUpdateWithoutCityInput>
  }

  export type FavoriteLocationUpdateManyWithWhereWithoutCityInput = {
    where: FavoriteLocationScalarWhereInput
    data: XOR<FavoriteLocationUpdateManyMutationInput, FavoriteLocationUncheckedUpdateManyWithoutCityInput>
  }

  export type CityCreateWithoutWeatherRecordsInput = {
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
    favorites?: FavoriteLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutWeatherRecordsInput = {
    id?: number
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
    favorites?: FavoriteLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutWeatherRecordsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutWeatherRecordsInput, CityUncheckedCreateWithoutWeatherRecordsInput>
  }

  export type CityUpsertWithoutWeatherRecordsInput = {
    update: XOR<CityUpdateWithoutWeatherRecordsInput, CityUncheckedUpdateWithoutWeatherRecordsInput>
    create: XOR<CityCreateWithoutWeatherRecordsInput, CityUncheckedCreateWithoutWeatherRecordsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutWeatherRecordsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutWeatherRecordsInput, CityUncheckedUpdateWithoutWeatherRecordsInput>
  }

  export type CityUpdateWithoutWeatherRecordsInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutWeatherRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type CityCreateWithoutFavoritesInput = {
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
    weatherRecords?: WeatherDataCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutFavoritesInput = {
    id?: number
    cityName: string
    locationName: string
    latitude: number
    longitude: number
    updatedAt?: Date | string
    weatherRecords?: WeatherDataUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutFavoritesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutFavoritesInput, CityUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUpsertWithoutFavoritesInput = {
    update: XOR<CityUpdateWithoutFavoritesInput, CityUncheckedUpdateWithoutFavoritesInput>
    create: XOR<CityCreateWithoutFavoritesInput, CityUncheckedCreateWithoutFavoritesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutFavoritesInput, CityUncheckedUpdateWithoutFavoritesInput>
  }

  export type CityUpdateWithoutFavoritesInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherRecords?: WeatherDataUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherRecords?: WeatherDataUncheckedUpdateManyWithoutCityNestedInput
  }

  export type FavoriteLocationCreateManyUserInput = {
    id?: number
    favoriteName: string
    cityId: number
  }

  export type FavoriteLocationUpdateWithoutUserInput = {
    favoriteName?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteLocationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteName?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteLocationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteName?: StringFieldUpdateOperationsInput | string
    cityId?: IntFieldUpdateOperationsInput | number
  }

  export type WeatherDataCreateManyCityInput = {
    id?: number
    timestamp: Date | string
    temperature: number
    humidity: number
    windSpeed: number
    description?: string | null
    updatedAt?: Date | string
  }

  export type FavoriteLocationCreateManyCityInput = {
    id?: number
    favoriteName: string
    userId: number
  }

  export type WeatherDataUpdateWithoutCityInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: IntFieldUpdateOperationsInput | number
    windSpeed?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteLocationUpdateWithoutCityInput = {
    favoriteName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteLocationUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteLocationUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
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