import conf from "../conf/conf"
import { Client, Databases, ID, Storage, Query } from "appwrite";

class ConfigService {
    client = new Client()
    databases;
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatedPost(documentId, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
        return null
    }


    async deletePost(documentId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            )

            return true
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
            return false
        }
    }

    async getPost(documentId) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, documentId)
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', true)]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)

        }
        catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
        }
    }

    //file upload service
    async uploadFile(file) {
        try {
            return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file)
        }
        catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(conf.appwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(fileId) {
        this.storage.getFile(conf.appwriteBucketId, fileId)
    }
}

const configService = new ConfigService()

export default configService