/* tslint:disable */
/* eslint-disable */
/* @relayHash cc1f330c603c0e89f26889b8217d3438 */

import { ConcreteRequest } from "relay-runtime";
export type AllUsersQueryVariables = {};
export type AllUsersQueryResponse = {
    readonly allUsers: ReadonlyArray<{
        readonly name: string | null;
        readonly id: string | null;
        readonly email: string | null;
        readonly profile_image: string | null;
        readonly password: string | null;
        readonly create_date: string | null;
    }> | null;
};
export type AllUsersQuery = {
    readonly response: AllUsersQueryResponse;
    readonly variables: AllUsersQueryVariables;
};



/*
query AllUsersQuery {
  allUsers {
    name
    id
    email
    profile_image
    password
    create_date
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allUsers",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "profile_image",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "password",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "create_date",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllUsersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AllUsersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AllUsersQuery",
    "id": null,
    "text": "query AllUsersQuery {\n  allUsers {\n    name\n    id\n    email\n    profile_image\n    password\n    create_date\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b1ff7ac57d183e0942e9f9b723c6f7f5';
export default node;
