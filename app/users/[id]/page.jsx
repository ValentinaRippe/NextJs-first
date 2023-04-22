async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="row">
      <div className="col-md-6 offset md-3">
        <div className="card">
          <div className="card-header">
            <h3>
              {user.id}. {user.first_name} {user.last_name}
            </h3>
          </div>
          <div className="card-body text-center">
            <img className="rounded-circle" src={user.avatar} alt={user.email} />
          </div>
        </div>
      </div>
    </div>
  );
}