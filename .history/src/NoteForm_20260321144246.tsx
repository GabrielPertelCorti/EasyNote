function NoteForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Enter title" />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea className="form-control" id="content" placeholder="Enter content"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default NoteForm