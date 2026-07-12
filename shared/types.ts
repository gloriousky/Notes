export interface NoteLabel {
  name: string
  color: string
}

export interface Note {
  id: number
  title: string
  body: string
  labels: NoteLabel[]
  createdAt: string
  updatedAt: string
  url: string
}
