export default function Popup({ closePopup }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">

      <div className="absolute inset-0 bg-neutral-400 opacity-50"></div>

      <div className="relative bg-white rounded-lg shadow-lg w-64 text-center z-10">
        <button
          className="absolute -top-5 -right-5 text-gray-700"
          onClick={closePopup}
        >
          <img
            src="/images/icons8-cerrar-30.png"
            alt="Close"
            width={24}
            height={24}
          />
        </button>

        <ul className="space-y-4">
          <li className="p-4 border-b-2">
            <a href="#about" className="text-black hover:text-gray-500" onClick={closePopup}>
              About
            </a>
          </li>
          <li className="pb-4 border-b-2">
            <a href="#lanzamientos" className="text-black hover:text-gray-500" onClick={closePopup}>
              Lanzamientos
            </a>
          </li>
          <li className="pb-4 border-b-2">
            <a href="#recomendaciones" className="text-black hover:text-gray-500" onClick={closePopup}>
              Recomendaciones
            </a>
          </li>
          <li className="pb-4 border-b-2">
            <a href="#contacto" className="text-black hover:text-gray-500" onClick={closePopup}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
