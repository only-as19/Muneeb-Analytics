import { Button } from '@/components';
import { useState } from 'react';

export default function StrategyCallForm() {
  const [formData, setFormData] = useState({
    meetingType: '',
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    description: ''
  });

  const [selectedTag, setSelectedTag] = useState('');

  const tags = ['Project discussion', 'Consultation', 'Technical support', 'Long-term planning'];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Meeting request submitted! You\'ll receive a confirmation email.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Book a strategy call
        </h1>
        
        <p className="text-gray-600 mb-8">
          Prefer a conversation? Schedule a meeting to discuss your project, troubleshoot a problem, or explore how we can work together.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-2 text-xs py-2 rounded-full border transition-colors ${
                selectedTag === tag
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div>
          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-3">
              Meeting type
            </label>
            <select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Select meeting type</option>
              <option value="30min">30 minutes</option>
              <option value="60min">60 minutes</option>
              <option value="90min">90 minutes</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Preferred date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Preferred time
              </label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-3">
                Your timezone
              </label>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">Select timezone</option>
                <option value="EST">EST (UTC-5)</option>
                <option value="CST">CST (UTC-6)</option>
                <option value="MST">MST (UTC-7)</option>
                <option value="PST">PST (UTC-8)</option>
                <option value="GMT">GMT (UTC+0)</option>
                <option value="CET">CET (UTC+1)</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-900 font-semibold mb-3">
              What would you like to cover?
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Share a brief overview of your project, challenge, or questions. Links are welcome."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            />
            <p className="text-gray-500 text-sm mt-2">
              The more context you share, the better we can prepare for your call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
            label='Request Meeting'
            onclick={handleSubmit}
            />
            <p className="text-gray-600 text-sm">
              You'll receive a confirmation email with the meeting details or an alternative time if needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}