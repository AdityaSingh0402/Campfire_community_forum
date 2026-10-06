import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export function requireAuth(req,res,next){const token=req.headers.authorization?.replace(/^Bearer\s+/i,'');if(!token)return res.status(401).json({message:'Sign in to continue.'});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:'Session expired. Sign in again.'});}}
export async function requireModerator(req,res,next){try{const allowed=(process.env.MODERATOR_EMAILS||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);const u=await User.findById(req.user.id).select('email');if(!u||!allowed.includes(u.email))return res.status(403).json({message:'Moderator access is required.'});next();}catch(e){next(e);}}
