import vision from '@google-cloud/vision'

export default async (filePath) => {
  try {
    const client = new vision.ImageAnnotatorClient()
    const [result] = await client.labelDetection(filePath)
    const labels = result.labelAnnotations
      .slice(0, 10)
      .map((label) => label.description)
    return labels
  } catch (err) {
    console.log(err)
  }
}
