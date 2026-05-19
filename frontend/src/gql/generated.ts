/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Amenity = {
  __typename?: 'Amenity';
  category: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateListingInput = {
  amenities: Array<Scalars['ID']['input']>;
  closedForBookings?: InputMaybe<Scalars['Boolean']['input']>;
  costPerNight: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  numOfBeds: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateListingResponse = {
  __typename?: 'CreateListingResponse';
  code: Scalars['Int']['output'];
  listing?: Maybe<Listing>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Listing = {
  __typename?: 'Listing';
  amenities: Array<Amenity>;
  closedForBookings?: Maybe<Scalars['Boolean']['output']>;
  costPerNight?: Maybe<Scalars['Float']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  numOfBeds?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createListing: CreateListingResponse;
};


export type MutationCreateListingArgs = {
  newListing?: InputMaybe<CreateListingInput>;
};

export type Query = {
  __typename?: 'Query';
  featuredListings: Array<Listing>;
  getListing?: Maybe<Listing>;
};


export type QueryGetListingArgs = {
  id: Scalars['ID']['input'];
};

export type CreateListingInput = {
  amenities: Array<string | number>;
  closedForBookings?: boolean | null | undefined;
  costPerNight: number;
  description: string;
  numOfBeds: number;
  title: string;
};

export type CreateNewListMutationVariables = Exact<{
  newListing?: CreateListingInput | null | undefined;
}>;


export type CreateNewListMutation = { createListing: { code: number, success: boolean, message: string, listing: { title: string, description: string, numOfBeds: number | null, costPerNight: number | null, closedForBookings: boolean | null, amenities: Array<{ category: string, id: string, name: string }> } | null } };

export type GetAllListingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllListingQuery = { featuredListings: Array<{ id: string, title: string, numOfBeds: number | null, costPerNight: number | null, closedForBookings: boolean | null, amenities: Array<{ category: string, name: string }> }> };

export type GetListingInfoQueryVariables = Exact<{
  id: string | number;
}>;


export type GetListingInfoQuery = { getListing: { title: string, numOfBeds: number | null, costPerNight: number | null, amenities: Array<{ name: string, category: string }> } | null };


export const CreateNewListDocument = gql`
    mutation createNewList($newListing: CreateListingInput) {
  createListing(newListing: $newListing) {
    code
    success
    message
    listing {
      title
      description
      numOfBeds
      costPerNight
      closedForBookings
      amenities {
        category
        id
        name
      }
    }
  }
}
    `;
export type CreateNewListMutationFn = Apollo.MutationFunction<CreateNewListMutation, CreateNewListMutationVariables>;

/**
 * __useCreateNewListMutation__
 *
 * To run a mutation, you first call `useCreateNewListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewListMutation, { data, loading, error }] = useCreateNewListMutation({
 *   variables: {
 *      newListing: // value for 'newListing'
 *   },
 * });
 */
export function useCreateNewListMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewListMutation, CreateNewListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewListMutation, CreateNewListMutationVariables>(CreateNewListDocument, options);
      }
export type CreateNewListMutationHookResult = ReturnType<typeof useCreateNewListMutation>;
export type CreateNewListMutationResult = Apollo.MutationResult<CreateNewListMutation>;
export type CreateNewListMutationOptions = Apollo.BaseMutationOptions<CreateNewListMutation, CreateNewListMutationVariables>;
export const GetAllListingDocument = gql`
    query GetAllListing {
  featuredListings {
    id
    title
    numOfBeds
    costPerNight
    closedForBookings
    amenities {
      category
      name
    }
  }
}
    `;

/**
 * __useGetAllListingQuery__
 *
 * To run a query within a React component, call `useGetAllListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllListingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllListingQuery(baseOptions?: Apollo.QueryHookOptions<GetAllListingQuery, GetAllListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllListingQuery, GetAllListingQueryVariables>(GetAllListingDocument, options);
      }
export function useGetAllListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllListingQuery, GetAllListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllListingQuery, GetAllListingQueryVariables>(GetAllListingDocument, options);
        }
// @ts-ignore
export function useGetAllListingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllListingQuery, GetAllListingQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllListingQuery, GetAllListingQueryVariables>;
export function useGetAllListingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllListingQuery, GetAllListingQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllListingQuery | undefined, GetAllListingQueryVariables>;
export function useGetAllListingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllListingQuery, GetAllListingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllListingQuery, GetAllListingQueryVariables>(GetAllListingDocument, options);
        }
export type GetAllListingQueryHookResult = ReturnType<typeof useGetAllListingQuery>;
export type GetAllListingLazyQueryHookResult = ReturnType<typeof useGetAllListingLazyQuery>;
export type GetAllListingSuspenseQueryHookResult = ReturnType<typeof useGetAllListingSuspenseQuery>;
export type GetAllListingQueryResult = Apollo.QueryResult<GetAllListingQuery, GetAllListingQueryVariables>;
export const GetListingInfoDocument = gql`
    query getListingInfo($id: ID!) {
  getListing(id: $id) {
    title
    numOfBeds
    costPerNight
    amenities {
      name
      category
    }
  }
}
    `;

/**
 * __useGetListingInfoQuery__
 *
 * To run a query within a React component, call `useGetListingInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListingInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListingInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetListingInfoQuery(baseOptions: Apollo.QueryHookOptions<GetListingInfoQuery, GetListingInfoQueryVariables> & ({ variables: GetListingInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListingInfoQuery, GetListingInfoQueryVariables>(GetListingInfoDocument, options);
      }
export function useGetListingInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListingInfoQuery, GetListingInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListingInfoQuery, GetListingInfoQueryVariables>(GetListingInfoDocument, options);
        }
// @ts-ignore
export function useGetListingInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListingInfoQuery, GetListingInfoQueryVariables>): Apollo.UseSuspenseQueryResult<GetListingInfoQuery, GetListingInfoQueryVariables>;
export function useGetListingInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetListingInfoQuery, GetListingInfoQueryVariables>): Apollo.UseSuspenseQueryResult<GetListingInfoQuery | undefined, GetListingInfoQueryVariables>;
export function useGetListingInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetListingInfoQuery, GetListingInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListingInfoQuery, GetListingInfoQueryVariables>(GetListingInfoDocument, options);
        }
export type GetListingInfoQueryHookResult = ReturnType<typeof useGetListingInfoQuery>;
export type GetListingInfoLazyQueryHookResult = ReturnType<typeof useGetListingInfoLazyQuery>;
export type GetListingInfoSuspenseQueryHookResult = ReturnType<typeof useGetListingInfoSuspenseQuery>;
export type GetListingInfoQueryResult = Apollo.QueryResult<GetListingInfoQuery, GetListingInfoQueryVariables>;