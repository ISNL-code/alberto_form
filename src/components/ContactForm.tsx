import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Snackbar,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Background = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, #cce3f5 0%, #fce1e4 100%)`,
  minHeight: "100vh",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow:
    "0 4px 20px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(173, 216, 230, 0.3)",
}));

const HighlightedCompany = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: "2rem",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
}));

export default function WholesaleFormGrid() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма відправлена:", form);
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <Background>
      <Container maxWidth="md">
        <Grid component="div" container spacing={2}>
          {/* Ліва частина — текст */}
          <Grid component="div" size={{ xs: 12, md: 6 }}>
            <Item>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
              >
                Оптова спiвпраця з <br />
                <HighlightedCompany>Alberto Bini</HighlightedCompany>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, fontWeight: "bold" }}
              >
                Залиште заявку, і ми запропонуємо вам вигідні умови для
                співпраці з брендом. Менеджер зв’яжеться з вами протягом 1-2
                робочих днів.
              </Typography>
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  📦 <strong>Мінімальне замовлення:</strong> від 10 одиниць
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  🚚 <strong>Швидка доставка по Україні та Європі</strong>
                </Typography>
                <Typography variant="subtitle1">
                  💬 <strong>Підтримка українською та російською</strong>
                </Typography>
              </Box>
            </Item>
          </Grid>

          {/* Права частина — форма */}
          <Grid component="div" size={{ xs: 12, md: 6 }}>
            <Item
              onSubmit={handleSubmit}
              sx={{
                boxShadow:
                  "0 8px 30px rgba(135, 206, 250, 0.15), 0 4px 15px rgba(173, 216, 230, 0.2)",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow:
                    "0 12px 40px rgba(135, 206, 250, 0.3), 0 8px 25px rgba(173, 216, 230, 0.35)",
                },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "600", mb: 3, color: "primary.main" }}
              >
                Залишити заявку
              </Typography>

              <Grid component="div" container spacing={3}>
                <Grid component="div" size={12}>
                  <TextField
                    fullWidth
                    label="Ваше ім’я"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid component="div" size={12}>
                  <TextField
                    fullWidth
                    label="Номер телефону"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid component="div" size={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="Коментар (необов’язково)"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid component="div" size={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      background:
                        "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
                      fontWeight: "bold",
                      letterSpacing: "0.05em",
                      "&:hover": {
                        background:
                          "linear-gradient(45deg, #21cbf3 30%, #2196f3 90%)",
                      },
                    }}
                  >
                    Відправити
                  </Button>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>

        <Snackbar
          open={sent}
          autoHideDuration={4000}
          onClose={() => setSent(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Дякуємо! Ми зв’яжемося з вами найближчим часом.
          </Alert>
        </Snackbar>
      </Container>
    </Background>
  );
}
