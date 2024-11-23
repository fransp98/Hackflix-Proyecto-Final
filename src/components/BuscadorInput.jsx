function BuscadorInput() {
  return (
    <div className="container buscador">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="escrube aqui tu peli :)"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default BuscadorInput;
