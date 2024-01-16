import { Skeleton } from "@mui/material";

function AccountLoading({ className }) {
  return (
    <div className={className}>
      <Skeleton variant="rounded">
        <div>First Name: FirstName</div>
      </Skeleton>
      <Skeleton variant="rounded">
        <div>Last Name: Last Name</div>
      </Skeleton>
      <Skeleton variant="rounded">
        <div>Email: First Name_Last</div>
      </Skeleton>
    </div>
  );
}

export default AccountLoading;
