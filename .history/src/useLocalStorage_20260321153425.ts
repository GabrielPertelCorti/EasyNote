import { useState } from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if(jsonValue === null){
      if(typeof initial)
    } else{
        return JSON.parse(jsonValue)
    }
  })
}