/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/resolvers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    checkStatus:
 *      ...
 *
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local checkStatus -p src/resolvers/checkStatus/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local checkStatus -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock checkStatus -m [MOCK_FILE_NAME]
 */

import {
  FunctionContext,
  FunctionEvent,
  FunctionResult,
} from "8base-cli-types";
import { TASK_STATUS_MUT, TASK_UPDFLT_MUT } from "../../mutations";

import { TASKS_LIST_QRY, TASK_BY_ID_QR } from "../../queries";

type TaskType = {
  id: String;
  taskCheck: Boolean;
};

type ResolverResult = FunctionResult<{
  // result: string,
  items: TaskType;
}>;

export default async (
  event: FunctionEvent<{ id: string; status: boolean }>,
  ctx: FunctionContext
): ResolverResult => {
  let response;
  try {
    response = await ctx.api.gqlRequest(TASK_BY_ID_QR, {
      filter: {
        id: {
          equals: event.data.id,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  
  const {
    tasksList: { 
      items: [{
        id
      }]
    }
  } = response;
  
  let updated;
  try {
    updated = await ctx.api.gqlRequest(TASK_STATUS_MUT, {
      filter: {
        id: {
          equals: id,
        },
      },
      status: {
        taskCheck: {
          set: event.data.status,
        },
      },
    });
    // return updated;
  } catch (error) {
    console.log(error);
    
  }
  console.log(event.data)
  return {
    data: {
      items: {
        id: id,
        taskCheck: event.data.status
        
      }
    }
  };
};

// -p src/resolvers/checkStatus/mocks/request.json