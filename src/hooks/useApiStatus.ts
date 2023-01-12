import { ApiStatus } from '@/api/api'
import { useMemo, useState } from 'react'

interface ApiActiveStatus {
  isIdeal: boolean
  isPinding: boolean
  isError: boolean
  isSuccess: boolean
}

const apiActiveStatus: ApiActiveStatus = {
  isIdeal: false,
  isError: false,
  isPinding: false,
  isSuccess: false,
}

function prepareStatuses(status: ApiStatus) {
  const selectedStatus: Partial<ApiActiveStatus> = {}

  for (let key in apiActiveStatus) {
    const match = `is${status}` as keyof ApiActiveStatus
    if (key === match) {
      selectedStatus[match] = true
    }
  }
  return selectedStatus
}
const useApiStatus = (currentStatus: ApiStatus = ApiStatus.IDLE) => {
  const [status, setStatus] = useState<ApiStatus>(currentStatus)
  const activeStatus = useMemo(() => prepareStatuses(status), [status])
  return {
    status,
    setStatus,
    ...apiActiveStatus,
    ...activeStatus,
  }
}

export default useApiStatus
