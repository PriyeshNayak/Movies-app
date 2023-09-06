import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}).promise()

export async function getMovies() {
  const [rows] = await pool.query("SELECT * FROM notes")
  return rows
}

export async function getMovie(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM notes
  WHERE id = ?
  `, [id])
  return rows[0]
}

export async function createMovie(title, rating) {
  const [result] = await pool.query(`
  INSERT INTO notes (title, rating)
  VALUES (?, ?)
  `, [title, contents])
  const id = result.insertId
  return getMovie(id)
}
export async function deleteMovie(id) {
    const [result] = await pool.query(`
    DELETE from notes where id= ? ` ,[id])
    return "deleted successfully"
  }

  export async function updateMovie(id,title,rating) {
    const [result] = await pool.query(`
    Update notes set title= ? , rating =?  where id=?` ,[title,rating,id])
    return "successfully updated"
  }