import Link from "next/link";

export default function () {
  return (
    <>
      <h1>Pagina principal</h1>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </>
  )
}