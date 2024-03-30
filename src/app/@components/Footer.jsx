export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mt-2">
          <a
            href="https://github.com/dunel/"
            className="text-white hover:text-gray-400"
          >
            GitHub del proyecto
          </a>
        </div>
        <p className="text-white text-center mt-4">
          © {new Date().getFullYear()} Dunel{" "}
        </p>
      </div>
    </footer>
  );
}
