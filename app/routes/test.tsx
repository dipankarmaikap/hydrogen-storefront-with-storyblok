import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/server-runtime';
const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
export const loader = async () => {
  const todos = await fetch('https://dummyjson.com/todos');
  await delay(200);
  return json({todos: (await todos.json()) ?? null, ok: true});
};
export default function Todos() {
  const loaderData = useLoaderData<typeof loader>();
  const todos = loaderData?.todos?.todos;

  return (
    <div>
      <h1>Totos</h1>
      <ul>
        {todos?.map((item: any) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}
