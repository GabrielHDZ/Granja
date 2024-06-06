import React from 'react'
import {useStore} from '@nanostores/react';
import { database } from '../store/exampleStore';


export default function ViewCounter() {
    const $isFalse=useStore(database);
  return $isFalse ? <h1>hola nanostore</h1> : <span>react</span>;
}
