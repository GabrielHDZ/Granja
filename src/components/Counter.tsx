import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { database } from '../store/exampleStore';
import './Counter.css';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}):JSX.Element {
	const [count, setCount] = useState(initialCount);
	const $data=useStore(database);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className="counter-message">{children}</div>
			<button onClick={()=>database.set(!$data)}>Change State</button>
		</>
	);
}