import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface FacilityCardProps {
  id: string;
  name: string;
  type: string;
  address: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const FacilityCard: FC<FacilityCardProps> = ({ id, name, type, address, onEdit, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Address: {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(id)}>
          Edit
        </Button>
        <Button size="small" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
