
export const Breadcrumb = ({ categories }) => {

  return (
    <div className="breadcrumb">
        {categories && <ul>
          {categories.map(cat => (
            <li key={cat.id}><a href="#">{cat.name}</a></li>
          ))}
        </ul>}
    </div>
  )
}
