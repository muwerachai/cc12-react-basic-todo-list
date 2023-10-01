function ShowItem() {
  return (
    <div className="d-flex gap-2 align-items-center">
      <small ClassName="text-muted">Show :</small>
      <select ClassName="form-select form-select-sm w-20">
        <option> 5 </option>
        <option> 10 </option>
        <option> 20 </option>
      </select>
    </div>
  );
}
export default ShowItem;
