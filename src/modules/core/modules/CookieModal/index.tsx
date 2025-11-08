import React from 'react';

interface CookieModalProps {
  onClose: () => void;
  onAccept: () => void;
}

const CookieModal: React.FC<CookieModalProps> = ({ onClose, onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white text-gray-800 rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">
          Політика щодо файлів cookie
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Ми використовуємо cookie для забезпечення роботи сайту, аналітики
          відвідуваності та покращення вашого досвіду. Cookie — це невеликі
          текстові файли, які зберігаються у вашому браузері.
        </p>
        <h3 className="font-semibold mt-3 mb-2">Типи файлів cookie:</h3>
        <ul className="list-disc pl-5 text-sm mb-4">
          <li>
            <strong>Необхідні</strong> — забезпечують роботу сайту.
          </li>
          <li>
            <strong>Аналітичні</strong> — допомагають зрозуміти, як користувачі
            взаємодіють із сайтом.
          </li>
          <li>
            <strong>Функціональні</strong> — зберігають ваші налаштування.
          </li>
        </ul>
        <p className="text-sm mb-4">
          Ви можете змінити налаштування cookie у своєму браузері. Детальніше —
          у розділі “Privacy Policy”.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Відхилити
          </button>
          <button
            onClick={() => {
              onAccept();
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Прийняти все
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
