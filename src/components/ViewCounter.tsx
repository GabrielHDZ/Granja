import React from 'react'
import {useStore} from '@nanostores/react';
import { database } from '../store/exampleStore';


export default function ViewCounter() {
    const $data=useStore(database);
  return $data ? <><h1>hola mundo</h1><button onClick={()=>database.set(!$data)}>Change State</button></> : <span>react</span>;
}
