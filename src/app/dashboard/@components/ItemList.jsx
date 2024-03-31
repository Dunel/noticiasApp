import Link from "next/link";

export default function ItemList({
  title,
  author,
  newId,
  createdAt,
  onDelete,
}) {
  return (
    <li key={newId} className="bg-white rounded-lg shadow-md p-6 w-full mb-6">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="truncate text-xl font-medium text-gray-900">
            {title}
          </div>
          <div className="ml-2 flex flex-shrink-0">
            <button
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              onClick={() => onDelete(newId)}
              title="Eliminar"
            >
              Eliminar
            </button>
            <Link
              href={`/dashboard/news/edit/${newId}`}
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
            >
              Editar
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="sm:flex">
            <div className="mr-6 flex items-center text-sm text-gray-500">
              {author}
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            {new Date(createdAt).toLocaleString()}
          </div>
        </div>
      </div>
    </li>
  );
}
