const GenerateUniqueId = () => {
  return "id_JEP_" + Math.random().toString(36).substr(2, 9)
}
export default GenerateUniqueId
