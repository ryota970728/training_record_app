import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { API_ENDPOINTS } from '../../constants/apiEndpoints'
import type {
  PartItem,
  MenuItem,
  RecordData,
  CurrentRecordData,
} from '../../types/types';

// ==========================================
// 1. 純粋なAPI通信関数 (fetch)
// ==========================================

const fetchPartData = async (): Promise<PartItem[]> => {
  const res = await fetch(API_ENDPOINTS.PARTS.FETCH, {
    method: 'GET',
    headers: {
      'Authorization': API_ENDPOINTS.AUTHORIZATION,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch part data')
  }
  return res.json()
}

const fetchMenuData = async (): Promise<MenuItem[]> => {
  const res = await fetch(API_ENDPOINTS.MENUS.FETCH, {
    method: 'GET',
    headers: {
      'Authorization': API_ENDPOINTS.AUTHORIZATION,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch menu data')
  }
  return res.json()
}

const fetchRecordData = async (): Promise<RecordData[]> => {
  const res = await fetch(API_ENDPOINTS.RECORDS.FETCH, {
    method: 'GET',
    headers: {
      'Authorization': API_ENDPOINTS.AUTHORIZATION,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch record data')
  }
  return res.json()
}

const postRecordData = async (payload: CurrentRecordData) => {
  const res = await fetch(API_ENDPOINTS.RECORDS.INSERT, {
    method: 'POST',
    headers: {
      'Authorization': API_ENDPOINTS.AUTHORIZATION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ record: payload }),
  })
  if (!res.ok) {
    throw new Error('Failed to post record data')
  }
  return res.json()
}

// ==========================================
// 2. カスタムフック (TanStack Query)
// ==========================================

export const useTraining = () => {
  const queryClient = useQueryClient()

  const useGetPartData = () => {
    return useQuery({
      queryKey: ['parts'],
      queryFn: fetchPartData,
    })
  }

  const useGetMenuData = () => {
    return useQuery({
      queryKey: ['menus'],
      queryFn: fetchMenuData,
    })
  }

  const useGetRecordData = () => {
    return useQuery({
      queryKey: ['records'],
      queryFn: fetchRecordData,
    })
  }

  const usePostRecordData = () => {
    return useMutation({
      mutationFn: (payload: CurrentRecordData) => postRecordData(payload),

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['records'] })
      },
      onError: (error) => {
        console.error('Failed to post record data:', error)
      }
    })
  }

  const partDataList = useGetPartData()?.data ?? []
  const menuDataList = useGetMenuData()?.data ?? []
  const recordDataList = useGetRecordData()?.data ?? []
  const { mutate: submitRecord, isPending } = usePostRecordData()

  return {
    partDataList,
    menuDataList,
    recordDataList,
    submitRecord,
    isPending
  }
}