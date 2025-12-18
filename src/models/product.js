const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specs: { type: String },
  price: { type: Number },


  priceRange: {
    min: { type: Number },
    max: { type: Number },
  },


  originalPrice: { type: Number },
  discount: { type: Number },

  shipping: { type: String },
  availability: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },

  // Link to a category collection
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  sales: { type: Number, default: 0 },
});

// Middleware to update category productCount when a product is saved
productSchema.post('save', async function (doc) {
  try {
    const Category = mongoose.model('TechCategory');
    await Category.findByIdAndUpdate(doc.category, {
      $inc: { productCount: 1 }
    });
  } catch (error) {
    console.error('Error updating category productCount on save:', error);
  }
});

// Middleware to update category productCount when a product is deleted
productSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    try {
      const Category = mongoose.model('TechCategory');
      await Category.findByIdAndUpdate(doc.category, {
        $inc: { productCount: -1 }
      });
    } catch (error) {
      console.error('Error updating category productCount on delete:', error);
    }
  }
});

// Handle category changes when product is updated
productSchema.pre('findOneAndUpdate', async function () {
  const update = this.getUpdate();
  if (update.category || update.$set?.category) {
    const doc = await this.model.findOne(this.getQuery());
    if (doc) {
      this._oldCategory = doc.category;
      this._newCategory = update.category || update.$set?.category;
    }
  }
});

productSchema.post('findOneAndUpdate', async function (doc) {
  if (this._oldCategory && this._newCategory && this._oldCategory.toString() !== this._newCategory.toString()) {
    try {
      const Category = mongoose.model('TechCategory');
      // Decrement old category
      await Category.findByIdAndUpdate(this._oldCategory, {
        $inc: { productCount: -1 }
      });
      // Increment new category
      await Category.findByIdAndUpdate(this._newCategory, {
        $inc: { productCount: 1 }
      });
    } catch (error) {
      console.error('Error updating category productCount on update:', error);
    }
  }
});

// Create the Product model from the schema
module.exports = mongoose.model("Product", productSchema);
