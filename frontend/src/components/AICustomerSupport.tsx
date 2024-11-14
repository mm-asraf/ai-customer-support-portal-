import { Button, Form } from 'react-bootstrap'
import Container from '../Utils/Container'
import classes from '../Utils/Container.module.css'
import { useState } from 'react'


interface FormValues {
  message: string,
  accountStatus: string,
  tone: string,
  channel: string,
  supportHistory:string
}

const AICustomerSupport:React.FC = () => {

  const [formValues,setFormValues] = useState<FormValues>({
    message:'',
    accountStatus: '',
    tone: '',
    channel: '',
    supportHistory: '',
  })

  const handleChange = () => { };

  const handleSubmit = () => { };

  return (


    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
      <Form onSubmit={handleSubmit} className="p-6">
        {/* Textarea field in a separate div */}
        <div className="mb-4">
          <Form.Group controlId="message">
            <Form.Label className="text-gray-700 font-semibold">Message</Form.Label>
            <div>
              <Form.Control
                as="textarea"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                className="w-cmn-width p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Group>
        </div>

        {/* Account Status */}
        <Form.Group controlId="accountStatus" className="mb-4">
          <Form.Label className="text-gray-700 font-semibold">Account Status</Form.Label>
          <Form.Select
            name="accountStatus"
            value={formValues.accountStatus}
            onChange={handleChange}
            className="w-cmn-width p-cmn-padding border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="basic">Basic</option>
            <option value="gold">Gold</option>
            <option value="vip">VIP</option>
          </Form.Select>
        </Form.Group>

        {/* Tone */}
        <Form.Group controlId="tone" className="mb-4">
          <Form.Label className="text-gray-700 font-semibold">Tone</Form.Label>
          <Form.Select
            name="tone"
            value={formValues.tone}
            onChange={handleChange}
            className="w-cmn-width p-cmn-padding border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="professional and concise">Professional and Concise</option>
            <option value="casual and friendly">Casual and Friendly</option>
            <option value="reassuring and understanding">Reassuring and Understanding</option>
          </Form.Select>
        </Form.Group>

        {/* Channel */}
        <Form.Group controlId="channel" className="mb-4">
          <Form.Label className="text-gray-700 font-semibold">Channel</Form.Label>
          <Form.Select
            name="channel"
            value={formValues.channel}
            onChange={handleChange}
            className="w-cmn-width p-cmn-padding border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="live chat">Live Chat</option>
            <option value="phone call">Phone Call</option>
            <option value="in-app messaging">In-app Messaging</option>
          </Form.Select>
        </Form.Group>

        {/* Support History */}
        <Form.Group controlId="supportHistory" className="mb-4">
          <Form.Label className="text-gray-700 font-semibold">Support History</Form.Label>
          <Form.Select
            name="supportHistory"
            value={formValues.supportHistory}
            onChange={handleChange}
            className="w-cmn-width p-cmn-padding border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="frequent requests with mixed feedback">Frequent Requests with Mixed Feedback</option>
            <option value="frequent requests with unresolved issues">Frequent Requests with Unresolved Issues</option>
            <option value="frequent requests with detailed follow-ups">Frequent Requests with Detailed Follow-ups</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg">
          Submit
        </Button>
      </Form>
    </div>
    <div className='w-full max-w-lg p-8 bg-white shadow-lg rounded-lg ml-3 h-cmn-height'></div>
  </div>



  )
}

export default AICustomerSupport