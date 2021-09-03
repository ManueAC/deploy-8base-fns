import gql from "graphql-tag";

//  8base Queries

export const TASKS_LIST_QRY = gql`
  query tasksList {
    tasksList {
      items {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskEnd
        taskStart
      }
    }
  }
`;

export const TASK_INFO_QRY = gql`
  query taskInfo($id: ID) {
    taskInfo(id: $id) {
      item {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskEnd
        taskStart
      }
    }
  }
`;

export const USER_LIST_QR = gql`
  query usersList {
    usersList {
      items {
        id
        email
        status
        firstName
      }
    }
  }
`;

export const TASK_BY_ID_QR = gql`
  query tasksList($filter: TaskFilter) {
    tasksList(filter: $filter) {
      items {
        id
        taskCheck
        taskTitle
        taskUser
        taskDscr
        taskStart
        taskEnd

      }
    }
  }
`;
