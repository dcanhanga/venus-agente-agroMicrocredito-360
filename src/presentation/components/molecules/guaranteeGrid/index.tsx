import { IGuarantee } from '@/types'
import { HiCheckCircle } from 'react-icons/hi'

interface IGaranteeGrid {
  guarantees: IGuarantee[]
}
const GuaranteeGrid = ({ guarantees }: IGaranteeGrid) => {
  return (
    <>
      <ul className="grid grid-cols-2 gap-3">
        {guarantees.map((guarantee, i) => (
          <li
            key={i}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition"
          >
            <HiCheckCircle className="text-green-500 text-lg flex-shrink-0" />
            <span className="font-medium text-gray-700">{guarantee.tipo}</span>
            <span className="text-green-600 font-semibold">
              {guarantee.valorEstimado.toLocaleString('pt-AO', {
                style: 'currency',
                currency: 'AOA',
              })}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export { GuaranteeGrid }
