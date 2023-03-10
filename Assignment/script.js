const appendFun = () => {
  const mainContainer = document.getElementById("main_container");
  const createEl = document.createElement("div");
  createEl.innerHTML = `<div class="max-w-md mx-auto mt-10 space-y-5">
  <div
    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
  >
    <div class="text-2xl font-semibold">0</div>
    <div class="flex space-x-3">
      <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
        Increment
      </button>
      <button class="bg-red-400 text-white px-3 py-2 rounded shadow">
        Decrement
      </button>
    </div>
  </div>
</div>`;
  mainContainer.appendChild(createEl);
};
