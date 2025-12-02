import { ref } from 'vue'

export const useEssayStore = () => {
  const generateMockEssay = (name, index) => ({
    id: (Date.now() + index).toString(),
    studentName: name,
    uploadedAt: new Date(Date.now() - index * 3600_000).toLocaleString(),
    ocrText: `This is a simulated OCR text for ${name}. The system extracted sample handwriting content.`,
    scores: {
      grammar: Math.floor(Math.random() * 3) + 3,     // 3–5
      structure: Math.floor(Math.random() * 3) + 3,
      argument: Math.floor(Math.random() * 3) + 3
    },
    feedback: `AI feedback for ${name}: The essay demonstrates clarity but could improve in structure.`,
    imagePath: `/mock/essays/${index + 1}.jpg`
  })

  // --- 🔹 Create 10 simulated students ---
  const simulatedNames = [
    'Maria Santos',
    'Juan Dela Cruz',
    'Ana Villanueva',
    'Mark Reyes',
    'Sofia Mendoza',
    'Daniel Gutierrez',
    'Erika Ramos',
    'Paolo Castillon',
    'Liza Vergara',
    'Kent Navarro'
  ]

  const essays = ref(simulatedNames.map((name, i) => generateMockEssay(name, i)))

  const selectedEssay = ref(null)

  const uploadEssay = (studentName) => {
    const newEssay = {
      id: Date.now().toString(),
      studentName,
      uploadedAt: new Date().toLocaleString(),
      ocrText: 'Simulated OCR text for demo',
      scores: { grammar: 4, structure: 4, argument: 4 },
      feedback: 'Simulated AI feedback',
      imagePath: ''
    }
    essays.value.push(newEssay)
    selectedEssay.value = newEssay
    return newEssay
  }

  const selectEssay = (id) => {
    selectedEssay.value = essays.value.find(e => e.id === id)
  }

  return { essays, selectedEssay, uploadEssay, selectEssay }
}
