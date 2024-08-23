export function TodoAddItem() {
  return (
    <form className="py-4 todo-list-spacing-x absolute bottom-0 w-[calc(100%-0.5rem)] border-t-2 todo-list-border-dashed dark:todo-list-border-dark-dashed">
      <div className="form-group flex justify-between flex-col md:flex-row">
        <input
          type="text"
          placeholder="Digite uma nova tarefa aqui..."
          className="w-[100%] md:w-[65%] p-2 placeholder-secondary-text focus:outline-none focus:ring focus:ring-neutral-200 bg-white dark:bg-body-dark-background"
        />
        <button
          type="submit"
          className="px-4 pt-3 pb-2 mt-2 md:mt-0 rounded-3xl bg-primay hover:bg-primay-highlight dark:bg-primay-dark dark:hover:bg-primay-dark-highlight"
        >
          <span className="font-bold text-lg text-text-black dark:text-white">
            Adicionar tarefa
          </span>
        </button>
      </div>
    </form>
  );
}
