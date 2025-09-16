import { ROLES, getCurrentRole, setCurrentRole } from "@/lib/roles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RoleSwitcher() {
  const current = getCurrentRole();
  function onChange(val) {
    setCurrentRole(val);
    location.reload();
  }
  return (
    <Select value={current} onValueChange={onChange}>
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ROLES.guest}>Guest</SelectItem>
        <SelectItem value={ROLES.client}>Client</SelectItem>
        <SelectItem value={ROLES.doctor}>Doctor</SelectItem>
        <SelectItem value={ROLES.centerAdmin}>Center Admin</SelectItem>
        <SelectItem value={ROLES.superAdmin}>Super Admin</SelectItem>
      </SelectContent>
    </Select>
  );
}
