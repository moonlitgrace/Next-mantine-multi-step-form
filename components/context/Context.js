import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
   const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
   const [plan, setPlan] = useState(1)
   const [monthly, setMonthly] = useState(true)
   const [addOns, setAddOns] = useState([])

   const getTotal = () => {
      let total = 0
      // if seleted is monthly plan
      if (monthly) {
         if (plan === 1) {
            total += 9
            if (addOns.some(addOn => addOn === 1)) total += 1
            if (addOns.some(addOn => addOn === 2)) total += 2
            if (addOns.some(addOn => addOn === 3)) total += 2

         } else if (plan === 2) {
            total += 12
            if (addOns.some(addOn => addOn === 1)) total += 1
            if (addOns.some(addOn => addOn === 2)) total += 2
            if (addOns.some(addOn => addOn === 3)) total += 2

         } else {
            total += 15
            if (addOns.some(addOn => addOn === 1)) total += 1
            if (addOns.some(addOn => addOn === 2)) total += 2
            if (addOns.some(addOn => addOn === 3)) total += 2

         }
      }
      // if seleted is yearly plan 
      else {
         if (plan === 1) {
            total += 19
            if (addOns.some(addOn => addOn === 1)) total += 10
            if (addOns.some(addOn => addOn === 2)) total += 12
            if (addOns.some(addOn => addOn === 3)) total += 12

         } else if (plan === 2) {
            total += 120
            if (addOns.some(addOn => addOn === 1)) total += 10
            if (addOns.some(addOn => addOn === 2)) total += 12
            if (addOns.some(addOn => addOn === 3)) total += 12

         } else {
            total += 150
            if (addOns.some(addOn => addOn === 1)) total += 10
            if (addOns.some(addOn => addOn === 2)) total += 12
            if (addOns.some(addOn => addOn === 3)) total += 12

         }
      }
      return total
   }

   const handleFormDataChange = (event) => {
      const { name, value } = event.target
      setFormData({ ...formData, [name]: value })
   }

   const handlePlanSelect = (index) => {
      setPlan(index)
   }

   const togglePlanTimeChange = () => {
      setMonthly(!monthly)
   }

   const handleAddOns = (index) => {
      if (!addOns.some(addOn => addOn === index)) {
         const obj = [...addOns, index]
         setAddOns(obj)
      } else {
         const obj = addOns.filter(addOns => addOns !== index)
         setAddOns(obj)
      }
   }


   const data = {
      formData: formData,
      plan: plan,
      monthly: monthly,
      addOns: addOns,
      handleFormDataChange: handleFormDataChange,
      handlePlanSelect: handlePlanSelect,
      togglePlanTimeChange: togglePlanTimeChange,
      handleAddOns: handleAddOns,
      getTotal: getTotal,
   }

   return (
      <Context.Provider value={data}>
         {children}
      </Context.Provider>
   )
}