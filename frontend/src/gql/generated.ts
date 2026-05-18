/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Amenity = {
  __typename?: "Amenity";
  category: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type CreateListingInput = {
  amenities: Array<Scalars["ID"]["input"]>;
  closedForBookings?: InputMaybe<Scalars["Boolean"]["input"]>;
  costPerNight: Scalars["Float"]["input"];
  description: Scalars["String"]["input"];
  numOfBeds: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateListingResponse = {
  __typename?: "CreateListingResponse";
  code: Scalars["Int"]["output"];
  listing?: Maybe<Listing>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Listing = {
  __typename?: "Listing";
  amenities: Array<Amenity>;
  closedForBookings?: Maybe<Scalars["Boolean"]["output"]>;
  costPerNight?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["ID"]["output"];
  numOfBeds?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createListing: CreateListingResponse;
};

export type MutationCreateListingArgs = {
  newListing?: InputMaybe<CreateListingInput>;
};

export type Query = {
  __typename?: "Query";
  featuredListings: Array<Listing>;
  getListing?: Maybe<Listing>;
};

export type QueryGetListingArgs = {
  id: Scalars["ID"]["input"];
};

export type GetFeaturedQueryVariables = Exact<{ [key: string]: never }>;

export type GetFeaturedQuery = {
  featuredListings: Array<{
    id: string;
    title: string;
    numOfBeds: number | null;
    costPerNight: number | null;
    closedForBookings: boolean | null;
  }>;
};

export const GetFeaturedDocument = gql`
  query GetFeatured {
    featuredListings {
      id
      title
      numOfBeds
      costPerNight
      closedForBookings
    }
  }
`;

/**
 * __useGetFeaturedQuery__
 *
 * To run a query within a React component, call `useGetFeaturedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFeaturedQuery,
    GetFeaturedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFeaturedQuery, GetFeaturedQueryVariables>(
    GetFeaturedDocument,
    options,
  );
}
export function useGetFeaturedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFeaturedQuery,
    GetFeaturedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFeaturedQuery, GetFeaturedQueryVariables>(
    GetFeaturedDocument,
    options,
  );
}
// @ts-ignore
export function useGetFeaturedSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFeaturedQuery,
    GetFeaturedQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<GetFeaturedQuery, GetFeaturedQueryVariables>;
export function useGetFeaturedSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetFeaturedQuery,
        GetFeaturedQueryVariables
      >,
): Apollo.UseSuspenseQueryResult<
  GetFeaturedQuery | undefined,
  GetFeaturedQueryVariables
>;
export function useGetFeaturedSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetFeaturedQuery,
        GetFeaturedQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetFeaturedQuery, GetFeaturedQueryVariables>(
    GetFeaturedDocument,
    options,
  );
}
export type GetFeaturedQueryHookResult = ReturnType<typeof useGetFeaturedQuery>;
export type GetFeaturedLazyQueryHookResult = ReturnType<
  typeof useGetFeaturedLazyQuery
>;
export type GetFeaturedSuspenseQueryHookResult = ReturnType<
  typeof useGetFeaturedSuspenseQuery
>;
export type GetFeaturedQueryResult = Apollo.QueryResult<
  GetFeaturedQuery,
  GetFeaturedQueryVariables
>;
