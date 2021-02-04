import { gql } from '@apollo/client'

export const COMPANIES = gql`
  query Companies($id: ID) {
    companies(id: $id) {
      id
      logo
      name
      domain
      owner {
        id
        email
      }
    }
  }
`
export const COMPANY = gql`
  query Company($id: ID!) {
    companies(id: $id) {
      id
      logo
      name
      domain
      owner {
        email
      }
      users {
        id
      }
      managers {
        id
      }
    }
  }
`
const FRAGMENT_COMPANY = gql`
  fragment company on Company {
    id
    name
    domain
    owner {
      ...user
    }
    users {
      ...user
    }
  }
`
const FRAGMENT_USER = gql`
  fragment user on User {
    id
    email
    phone
    firstName
    lastName
    manager
  }
`

export const CREATE_COMPANY = gql`
  mutation createCompany($company: CompanyInput!) {
    createCompany(company: $company) {
      company {
        ...company
      }
    }
  }
  ${FRAGMENT_COMPANY}
  ${FRAGMENT_USER}
`

export const UPDATE_COMPANY = gql`
  mutation updateCompany($id: ID!, $company: CompanyInput!) {
    updateCompany(id: $id, company: $company) {
      company {
        ...company
      }
    }
  }
  ${FRAGMENT_COMPANY}
  ${FRAGMENT_USER}
`

export const DELETE_COMPANY = gql`
  mutation deleteCompany($id: ID!) {
    deleteCompany(id: $id) {
      success
    }
  }
`
