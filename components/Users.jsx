"use client";
import { useRouter } from "next/navigation";

export function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          role="button"
          className="list-group-item-action pointer list-group-item d-flex justify-content-between align-items-center"
          onClick={() => router.push(`users/${user.id}`)}
        >
          <div>
            <h5>
              {user.id}. {user.first_name} {user.last_name}
            </h5>
          </div>
          <div>
            <img className=" rounded-circle" src={user.avatar} alt={user.email} />
          </div>
        </li>
      ))}
    </ul>
  );
}
