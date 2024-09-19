cb = document.getElementsByClassName("bdscript");
arr = cb[0].textContent

// BDScript Highlighter by Roxette Menzy Dillon.
// Discord: .koomball

keys = [
	"$addButton", "$addCmdReactions", "$addEmoji", "$addField", "$addMessageReactions", "$addReactions", "$addSelectMenuOption", "$addTextInput", "$addTimestamp", "$addTimestamp", "$allMembersCount", "$allowMention", "$allowRoleMentions", "$allowUserMentions", "$alternativeParsing", "$and", "$appendOptionSuggestion", "$argCount", "$argsCheck", "$async", "$authorAvatar", "$authorID", "$authorIcon", "$authorOfMessage", "$authorURL", "$author", "$autoCompleteOptionName", "$autoCompleteOptionValue", "$awaitFunc", "$awaitReactions", "$await", "$ban", "$banID", "$banID", "$ban", "$blackListIDs", "$blackListRolesIDs", "$blackListRoles", "$blackListServers", "$blackListUsers", "$boostCount", "$boostCount", "$botCommands", "$botID", "$botLeave", "$botLeave", "$botListDescription", "$botListHide", "$botNode", "$botOwnerID", "$botTyping", "$calculate", "$categoryChannels", "$categoryCount", "$categoryCount", "$categoryID", "$changeCooldownTime", "$changeUsernameWithID", "$changeUsername", "$channelCount", "$channelExists", "$channelID", "$channelIDFromName", "$channelID", "$channelName", "$channelNames", "$channelPosition", "$channelPosition", "$channelSendMessage", "$channelTopic", "$channelTopic", "$channelType", "$charCount", "$checkCondition", "$checkContains", "$checkUserPerms", "$clear", "$clearReactions", "$clear", "$closeTicket", "$colorRole", "$color", "$commandsCount", "$cooldown", "$createChannel", "$createRole", "$creationDate", "$cropText", "$customEmoji", "$customID", "$customImage", "$date", "$day", "$defer", "$deleteChannelsByName", "$deleteChannels", "$deleteIn", "$deleteMessage", "$deleteRole", "$deletecommand", "$description", "$disableInnerSpaceRemoval", "$disableSpecialEscaping", "$discriminator", "$displayName", "$displayName", "$divide", "$dmChannelID", "$dm", "$editButton", "$editChannelPerms", "$editEmbedIn", "$editIn", "$editMessage", "$editSelectMenuOption", "$editSelectMenu", "$editSplitText", "$editThread", "$embedSuppressErrors", "$embeddedURL", "$emoteCount", "$enableDecimals", "$enabled", "$endasync", "$ephemeral", "$error", "$eval", "$executionTime", "$findChannel", "$findRole", "$findUser", "$footerIcon", "$footer", "$getBanReason", "$getBotInvite", "$getChannelVar", "$getCooldown", "$getCustomStatus", "$getEmbedData", "$getInviteInfo", "$getLeaderboardValue", "$getMessage", "$getReactions", "$getRoleColor", "$getServerInvite", "$getServerInvite", "$getServerVar", "$getTextSplitIndex", "$getTextSplitLength", "$getTimestamp", "$getTimestamp", "$getUserStatus", "$getUserVar", "$getVar", "$giveRole", "$globalCooldown", "$globalUserLeaderboard", "$guildExists", "$guildID", "$guildID", "$hasRole", "$highestRole", "$highestRoleWithPerms", "$highestRole", "$hostingExpireTime", "$hostingExpireTime", "$hour", "$httpAddHeader", "$httpDelete", "$httpGetHeader", "$httpGet", "$httpPatch", "$httpPost", "$httpPut", "$httpRemoveHeader", "$httpResult", "$httpResult", "$httpStatus", "$hypesquad", "$ignoreChannels", "$ignoreLinks", "$ignoreTriggerCase", "$image", "$input", "$isAdmin", "$isBanned", "$isBoolean", "$isBot", "$isHoisted", "$isInteger", "$isMentionable", "$isNSFW", "$isNumber", "$isSlash", "$isTicket", "$isTimedOut", "$isUserDMEnabled", "$isValidHex", "$joinSplitText", "$jsonArrayAppend", "$jsonArrayCount", "$jsonArrayIndex", "$jsonArrayPop", "$jsonArrayReverse", "$jsonArrayShift", "$jsonArraySort", "$jsonArrayUnshift", "$jsonArray", "$jsonClear", "$jsonExists", "$jsonJoinArray", "$jsonParse", "$jsonPretty", "$jsonSetString", "$jsonSet", "$jsonStringify", "$jsonUnset", "$json", "$kick", "$kickMention", "$kickMention", "$kick", "$lowestRole", "$lowestRoleWithPerms", "$lowestRole", "$max", "$membersCount", "$membersCount", "$mentionedChannels", "$mentionedRoles", "$mentioned", "$message", "$messageID", "$message", "$min", "$minute", "$modifyChannelPerms", "$modifyChannel", "$modifyRolePerms", "$modifyRole", "$modulo", "$month", "$multi", "$mute", "$newModal", "$newSelectMenu", "$newTicket", "$nickname", "$nickname", "$noMentionMessage", "$noMentionMessage", "$nodeVersion", "$nodeVersion", "$numberSeparator", "$onlyAdmin", "$onlyBotChannelPerms", "$onlyBotPerms", "$onlyForCategories", "$onlyForChannels", "$onlyForIDs", "$onlyForRoleIDs", "$onlyForRoles", "$onlyForServers", "$onlyForUsers", "$onlyIfMessageContains", "$onlyIf", "$onlyNSFW", "$onlyPerms", "$optOff", "$or", "$parentID", "$parentID", "$pinMessage", "$pinMessage", "$ping", "$premiumExpireTime", "$premiumExpireTime", "$publishMessage", "$random", "$randomCategoryID", "$randomChannelID", "$randomGuildID", "$randomMention", "$randomRoleID", "$randomString", "$randomText", "$randomUser", "$randomUserID", "$random", "$registerGuildCommands", "$registerGuildCommands", "$removeAllComponents", "$removeAllComponents", "$removeButtons", "$removeButtons", "$removeComponent", "$removeContains", "$removeEmoji", "$removeLinks", "$removeLinks", "$removeSplitTextElement", "$repeatMessage", "$replaceText", "$repliedMessageID", "$repliedMessageID", "$reply", "$replyIn", "$reply", "$resetChannelVar", "$resetServerVar", "$resetUserVar", "$roleCount", "$roleExists", "$roleGrant", "$roleID", "$roleInfo", "$roleName", "$roleNames", "$rolePosition", "$round", "$scriptLanguage", "$second", "$sendEmbedMessage", "$sendMessage", "$sendNotification", "$serverChannelExists", "$serverCooldown", "$serverCount", "$serverDescription", "$serverDescription", "$serverEmojis", "$serverIcon", "$serverIcon", "$serverInfo", "$serverLeaderboard", "$serverName", "$serverNames", "$serverNames", "$serverOwner", "$serverOwner", "$serverRegion", "$serverVerificationLvl", "$setChannelVar", "$setServerVar", "$setUserVar", "$setVar", "$shardID", "$shardID", "$slashCommandsCount", "$slashID", "$slashID", "$slowmode", "$sort", "$splitText", "$startThread", "$stop", "$sub", "$sum", "$suppressErrors", "$suppressErrors", "$takeRole", "$textSplit", "$threadAddMember", "$threadRemoveMember", "$thumbnail", "$time", "$timeout", "$title", "$toLowercase", "$toTitleCase", "$toUppercase", "$trimContent", "$trimSpace", "$tts", "$unban", "$unbanID", "$unbanID", "$unescape", "$unmute", "$unpinMessage", "$unregisterGuildCommands", "$unregisterGuildCommands", "$untimeout", "$uptime", "$url", "$useChannel", "$usedEmoji", "$userAvatar", "$userBadges", "$userBannerColor", "$userBanner", "$userExists", "$userID", "$userInfo", "$userJoinedDiscord", "$userJoined", "$userLeaderboard", "$userPerms", "$userReacted", "$userRoles", "$userServerAvatar", "$username", "$username", "$varExistError", "$varExists", "$var", "$variablesCount", "$webhookAvatarURL", "$webhookColor", "$webhookContent", "$webhookCreate", "$webhookDelete", "$webhookDescription", "$webhookFooter", "$webhookSend", "$webhookTitle", "$webhookUsername", "$year"
];

for (b = 0; b < cb.length; b++) {
	
	for (i = 0; i < keys.length; i++) {
		// FUNCTIONS
		arr = arr.replaceAll(keys[i], '<span style="color: #73FBFF;">' + keys[i] + '</span>');
		arr = arr.replaceAll("$c[", '<span style="color: #73FBFF;">' + "$c" + '</span>' + '<span style="color: #FF4C4C; font-weight: bold;">' + "[" + '</span>');
	};
	
	arr = arr.replaceAll("$nomention", '<span style="color: #FF77F9;">' + "$nomention" + '</span>');
	
	arr = arr.replaceAll("$if", '<span style="color: #B95CF4;">' + "$if" + '</span>');
	arr = arr.replaceAll("$elseif", '<span style="color: #B95CF4;">' + "$elseif" + '</span>');
	arr = arr.replaceAll("$else", '<span style="color: #B95CF4;">' + "$else" + '</span>');
	arr = arr.replaceAll("$endif", '<span style="color: #B95CF4;">' + "$endif" + '</span>');
	arr = arr.replaceAll("$try", '<span style="color: #B95CF4;">' + "$try" + '</span>');
	arr = arr.replaceAll("$catch", '<span style="color: #B95CF4;">' + "$catch" + '</span>');
	arr = arr.replaceAll("$endtry", '<span style="color: #B95CF4;">' + "$endtry" + '</span>');
	
	arr = arr.replaceAll("[", '<span style="color: #FF4C4C; font-weight: bold;">' + "[" + '</span>');
	arr = arr.replaceAll("]", '<span style="color: #FF4C4C; font-weight: bold;">' + "]" + '</span>');
	arr = arr.replaceAll(".;", '<span style="color: #FF4C4C; font-weight: bold;">' + ";" + '</span>');
	
	cb[b].innerHTML = arr; 
	
	try {
		arr = cb[b + 1].textContent;
	} catch (error) { console.log("highlight success") };

};