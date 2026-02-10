import { useMemo, useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  topic: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: null, message: '' })

  const contactCards = useMemo(
    () => [
      { title: 'Satış ve Teklif', detail: ['+90 506 875 03 58', '+90 506 092 03 42']},
      { title: 'E-posta', detail: 'info@konyakilit.com'},
      { title: 'Adres', detail: 'Fevziçakmak, Medcezir Cd. no:8/B D:06, 42050 Karatay/Konya'},
    ],
    []
  )

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Lütfen geçerli bir e-posta girin.'
    }
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = validate()
    if (error) {
      setStatus({ type: 'error', message: error })
      return
    }
    setStatus({ type: 'success', message: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.' })
    setForm(initialForm)
  }

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto max-w-7xl space-y-10 px-1.5 pt-10 sm:px-2 lg:px-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactCards.map((card) => (
            <div key={card.title} className="text-center">
              <p className="text-base font-semibold text-slate-900">{card.title}</p>
              {Array.isArray(card.detail) ? (
                <div className="mt-2 space-y-1">
                  {card.detail.map((item, idx) => (
                    <p key={idx} className="text-base text-slate-900">{item}</p>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-base text-slate-900">{card.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Form</p>
                <h2 className="text-xl font-semibold text-slate-900">Mesaj bırakın</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Talebinizi ilgili ekibe yönlendirelim. Zorunlu alanlar işaretlidir.
                </p>
              </div>
              <span className="rounded-full bg-[#166534]/15 px-3 py-1 text-xs font-semibold uppercase text-[#14532d]">
                7/24
              </span>
            </div>

            {status.type ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-[#166534]'
                    : 'border-yellow-200 bg-yellow-50 text-yellow-800'
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              <label className="space-y-1 text-sm font-medium text-slate-700">
                Ad Soyad*
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/40"
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Ad Soyad"
                />
              </label>
              <label className="space-y-1 text-sm font-medium text-slate-700">
                E-posta*
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/40"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  type="email"
                  placeholder="E-posta"
                />
              </label>
              <label className="space-y-1 text-sm font-medium text-slate-700">
                Telefon
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/40"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="Telefon"
                />
              </label>
              <label className="space-y-1 text-sm font-medium text-slate-700">
                Firma
                <input
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/40"
                  value={form.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  placeholder="Firma Adı"
                />
              </label>
              <label className="md:col-span-2 space-y-1 text-sm font-medium text-slate-700">
                Konu
                <select
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/40"
                  value={form.topic}
                  onChange={(e) => updateField('topic', e.target.value)}
                >
                  <option value="">Seçiniz</option>
                  <option value="satis">Satış / Teklif</option>
                  <option value="teknik">Teknik Destek</option>
                  <option value="proje">Proje / Uygulama</option>
                  <option value="ik">İnsan Kaynakları</option>
                  <option value="diger">Diğer</option>
                </select>
              </label>
              <label className="md:col-span-2 space-y-1 text-sm font-medium text-slate-700">
                Mesaj*
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/40"
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Mesaj"
                />
              </label>
              <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">* Zorunlu alanlar</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#166534] px-5 py-3 text-sm font-semibold uppercase text-white shadow-sm transition hover:bg-[#14532d]"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Ofis</p>
              <h3 className="text-lg font-semibold text-slate-900">Çalışma Saatleri</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span className="font-semibold text-slate-900">08:30 - 18:00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Cumartesi</span>
                  <span className="font-semibold text-slate-900">09:00 - 13:00</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Konya Kilit Konum"
                src="https://www.google.com/maps?q=Fevziçakmak,+Medcezir+Cd.+no:8/B+D:06,+42050+Karatay/Konya&hl=tr&z=15&output=embed"
                className="h-[320px] w-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


