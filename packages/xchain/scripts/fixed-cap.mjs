#!/usr/bin/env ts-node
import { config } from 'dotenv'
import {$} from 'zx'
config();

await $`curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.createFixedCapAsset",
    "params" :{
        "name": "Bobcat Cash Stable Dollar",
        "symbol":"BSD",
        "denomination": 9,
        "initialHolders": [
            {
                "address": "${process.env.ADDRESS}",
                "amount": 1000000000
            }
        ],
        "from":["${process.env.ADDRESS}"],
        "changeAddr":"",
        "username":"admin",
        "password":"${process.env.PASSWORD}"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`.pipe(process.stdout);

//await $`${command}`.pipe(process.stdout);
