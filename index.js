import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ShoeStore() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Add or edit product
  const handleSave = () => {
    if (isEditing) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? { ...product } : p))
      );
      setIsEditing(false);
    } else {
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    }
    setProduct({ id: null, name: "", category: "", price: "", description: "" });
  };

  // Edit product by ID
  const handleEdit = (id) => {
    const selectedProduct = products.find((p) => p.id === id);
    setProduct(selectedProduct);
    setIsEditing(true);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Loja de Sapatos - Cadastro e Edição</h1>

      {/* Formulário de Cadastro/Edição */}
      <Card className="mb-6">
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Produto</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={product.name}
                onChange={handleChange}
                placeholder="Digite o nome"
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Input
                id="category"
                name="category"
                type="text"
                value={product.category}
                onChange={handleChange}
                placeholder="Digite a categoria"
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                placeholder="Digite o preço"
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                name="description"
                type="text"
                value={product.description}
                onChange={handleChange}
                placeholder="Digite a descrição (opcional)"
              />
            </div>
            <Button onClick={handleSave} className="w-full mt-4">
              {isEditing ? "Salvar Alterações" : "Cadastrar Produto"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Produtos */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Produtos Cadastrados</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">Nenhum produto cadastrado ainda.</p>
        ) : (
          <ul className="space-y-4">
            {products.map((p) => (
              <li key={p.id} className="border rounded-lg p-4">
                <p><strong>Nome:</strong> {p.name}</p>
                <p><strong>Categoria:</strong> {p.category}</p>
                <p><strong>Preço:</strong> R$ {p.price}</p>
                {p.description && <p><strong>Descrição:</strong> {p.description}</p>}
                <Button onClick={() => handleEdit(p.id)} className="mt-2">Editar</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
