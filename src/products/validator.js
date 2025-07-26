

export function validateId(req, res, next) {
    const { id } = req.params;
    if (id && !id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ error: "Invalid MongoDB ObjectID format" });
    }

    next();
}

export function validateCreate(req, res,next) {
    const { name, price, description, category, inStock } = req.body

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a non-empty string' })
    }
    if (!price || typeof price !== 'number') {
        return res.status(400).json({ error: 'Price is required and must be a number' })
    }
    if (description !== undefined && typeof description !== 'string') {
        return res.status(400).json({ error: 'Description must be a string' })
    }
    if (category !== undefined && typeof category !== 'string') {
        return res.status(400).json({ error: 'Category must be a string' })
    }
    if (typeof inStock !== 'boolean') {
        return res.status(400).json({ error: 'inStock must be a boolean' })
    }
    next()
}

export function validateUpdate(req, res,next) {
  const { name, price, description, category, inStock } = req.body

  if (name && (typeof name !== 'string' || name.trim() === '')) {
    return res.status(400).json({ error: 'Name must be a non-empty string' })
  }
  if (price && typeof price !== 'number') {
    return res.status(400).json({ error: 'Price must be a number' })
  }
  if (description && typeof description !== 'string') {
    return res.status(400).json({ error: 'Description must be a string' })
  }
  if (category && typeof category !== 'string') {
    return res.status(400).json({ error: 'Category must be a string' })
  }
  if (inStock && typeof inStock !== 'boolean') {
    return res.status(400).json({ error: 'inStock must be a boolean' })
  }
  next()
}

