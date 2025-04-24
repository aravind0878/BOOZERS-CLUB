
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CustomerInfo = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
};

export type { CustomerInfo };

type Props = {
  onSubmit: (data: CustomerInfo) => void;
};

const CustomerInfoForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<CustomerInfo>({
    mode: "onChange",
  });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            {...register("firstName", { required: "First name is required" })}
            id="firstName"
            placeholder="John"
            autoComplete="given-name"
          />
          {errors.firstName && <span className="text-red-600 text-xs">{errors.firstName.message}</span>}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            id="lastName"
            placeholder="Doe"
            autoComplete="family-name"
          />
          {errors.lastName && <span className="text-red-600 text-xs">{errors.lastName.message}</span>}
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone" } })}
          id="phone"
          placeholder="00000000000"
          autoComplete="tel"
        />
        {errors.phone && <span className="text-red-600 text-xs">{errors.phone.message}</span>}
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          {...register("address", { required: "Address is required" })}
          id="address"
          placeholder="Flat / House No., Street"
          autoComplete="street-address"
        />
        {errors.address && <span className="text-red-600 text-xs">{errors.address.message}</span>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            {...register("city", { required: "City is required" })}
            id="city"
            placeholder="Hyderabad"
            autoComplete="address-level2"
          />
          {errors.city && <span className="text-red-600 text-xs">{errors.city.message}</span>}
        </div>
        <div>
          <Label htmlFor="pincode">Pincode</Label>
          <Input
            {...register("pincode", { required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Invalid pincode" } })}
            id="pincode"
            placeholder="500001"
            autoComplete="postal-code"
          />
          {errors.pincode && <span className="text-red-600 text-xs">{errors.pincode.message}</span>}
        </div>
      </div>
      <Button type="submit" className="bg-brand-teal w-full" disabled={!isValid}>
        proceed to  whatsapp for order
      </Button>
    </form>
  );
};

export default CustomerInfoForm;
