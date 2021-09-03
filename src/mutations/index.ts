import gql from "graphql-tag";

// 8Base Mutations

export const TASK_CREATE_MUT = gql`
  mutation taskCreate($input: TaskCreateInput!) {
    taskCreate(data: $input) {
      taskTitle
      taskUser
      taskDscr
      taskCheck
      taskStart
      taskEnd
      id
    }
  }
`;

export const TASK_UPDATE_MUT = gql`
  mutation taskUpdate($inputData: TaskUpdateInput!, $filter: TaskKeyFilter!) {
    taskUpdate(data: $inputData, filter: $filter) {
      id
      taskTitle
      taskUser
      taskDscr
      taskCheck
      taskStart
      taskEnd
    }
  }
`;
export const TASK_DELETE_MUT = gql`
  mutation taskDelete($data: TaskDeleteInput, $taskId: TaskKeyFilter) {
    taskDelete(data: $data, filter: $taskId) {
      success
    }
  }
`;

export const TASK_UPDFLT_MUT = gql`
  mutation taskUpdateByFilter(
    $input: TaskUpdateByFilterInput!
    $id: TaskFilter
  ) {
    taskUpdateByFilter(data: $input, filter: $id) {
      items {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskStart
        taskEnd
      }
    }
  }
`;

export const TASK_STATUS_MUT = gql`
  mutation taskUpdateByFilter(
    $filter: TaskFilter!
    $status: TaskUpdateByFilterInput!
  ) {
    taskUpdateByFilter(filter: $filter, data: $status) {
      items {
        taskCheck
      }
    }
  }
`;
