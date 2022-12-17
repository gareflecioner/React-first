import React from 'react'

export const Form = () => (

<form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Ваш Email.</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@example.com"/>
  </div>
  <div className="form-group">
    <label for="FormControl">Исполнитель.</label>
    <textarea className="form-control" id="FormControl" rows="1"placeholder="Исполнитель."></textarea>
  </div>
  <div className="form-group">
    <label for="FormControl">Название Альбома.</label>
    <textarea className="form-control" id="FormControl" rows="1"placeholder="Название Альбома." ></textarea>
  </div>
</form>
);